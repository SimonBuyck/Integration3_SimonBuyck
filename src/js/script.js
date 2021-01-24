{
  let stepIndex = 1;
  //
  const showFact = async () => {
    const year = document.querySelector(`.date`).textContent.split(` `)[2];
    const response = await fetch(`./assets/data/nice-to-know.json`);
    const facts = await response.json();
    // eslint-disable-next-line eqeqeq
    const fact = facts.filter(fact => fact.year == year)[0].fact;

    document.querySelector(`.fact`).textContent = fact;
  };

  const handleChangeFilter = e => {
    const season = e.currentTarget.value;
    const path = window.location.href.split(`?`)[0];
    const qs = `?season=${season}`;
    getEpisodes(`${path}${qs}`);
  };

  const getEpisodes = async url => {
    const response = await fetch(url, {
      headers: new Headers({
        Accept: 'application/json'
      })
    });
    const episodes = await response.json();
    window.history.pushState({}, ``, url);
    showEpisodes(episodes);
  };

  const showEpisodes = episodes => {
    const $parent = document.querySelector(`.episodes`);
    $parent.innerHTML = ``;
    episodes.forEach(episode => {
      $parent.innerHTML += `<li class="episodes__episode"><a href="index.php?page=detail&id=${episode.id}">${episode.title}</a></li>`;
    });
  };

  // deze functie zet de name / value pairs van het formulier om naar JSON formaat
  // plaats gerust enkele console.log() om de input en output te checken
  const formdataToJson = $from => {
    const data = new FormData($from);
    const obj = {};
    data.forEach((value, key) => {
      console.log(`${key} : ${value}`);
      obj[key] = value;

    });
    return obj;
  };

  const handleQuoteSubmit = e => {
    // het verzenden van het formulier naar de server tegenhouden
    const $form = e.currentTarget;
    e.preventDefault();
    // JavaScript laten overnemen om te communiceren met de server
    postQuote($form.getAttribute('action'), formdataToJson($form)); // object opmaken
  };

  // deze functie zal het formulier afhandelen: merk op dat dit een async functie is
  const postQuote = async (url, data) => {
    // versturen naar de juiste route op de server en aangeven dat we een JSON response verwachten
    // de parameter body bevat de data (in dit geval quoten auteur en id van de aflevering)
    const response = await fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    });
    // antwoord van PHP. Kan een error bevatten of een lijst van quotes (zie code in EpisodesController)
    const returned = await response.json();
    console.log(returned);
    if (returned.error) {
      console.log(returned.error);
      // TODO: ook nog de boodschap vervangen die normaal door de session wordt gegeven
    } else {
      showQuotes(returned);
    }
  };

  // quotes opbouwen
  const showQuotes = quotes => {
    const $parent = document.querySelector('.quote__list');
    $parent.innerHTML = ``;
    quotes.forEach(quote => {
      const $li = document.createElement('li');
      $li.innerHTML = `"${quote.quote}" - <span class="quote__author">${quote.author}</span>`;
      $parent.appendChild($li);
    });
  };

  const plusStep = n => {
    showSteps(stepIndex += n);
  };

  const showSteps = i => {
    const steps = document.querySelectorAll('.step');
    if (i > steps.length) { stepIndex = 1; }
    if (i < 1) { stepIndex = steps.length; }
    let j;
    for (j = 0; j < steps.length; j++) {
      steps[j].style.display = 'none';
    }
    steps[stepIndex - 1].style.display = 'block';
  };

  const init = () => {
    document.documentElement.classList.add('has-js');

    const $season = document.querySelector(`.filter-season`);
    if ($season) {
      $season.addEventListener(`change`, handleChangeFilter);
    }

    const $date = document.querySelector(`.date`);
    if ($date) {
      showFact();
    }
    //form steps
    const $prev = document.querySelector('.prevstep');
    const $next = document.querySelector('.nextstep');
    if ($prev) {
      $prev.addEventListener('click', () => { plusStep(- 1); });
    }
    if ($next) {
      $next.addEventListener('click', () => { plusStep(1); });
    }
    if ($next && $prev) {
      showSteps(1);
    }

    // luisteren naar de submit van het quote formulier als dit formulier op de pagina staat (dus enkel op de detail pagina)
    const $quoteForm = document.querySelector('.quote-form');
    if ($quoteForm) {
      $quoteForm.addEventListener('submit', handleQuoteSubmit);
    }
  };

  init();
}
