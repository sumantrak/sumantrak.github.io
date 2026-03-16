// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Questions, themes, and representative work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Papers, workshops, and preprints. Venue is highlighted; preprints and under-review work are labeled explicitly.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae with a downloadable PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-visited-saarbrucken-for-the-workshop-on-safe-and-causally-informed-deep-rl-on-may-23-24-2024",
          title: 'Visited Saarbrucken for the workshop on Safe and Causally Informed Deep RL on...',
          description: "",
          section: "News",},{id: "news-released-the-preprint-graph-agnostic-causal-bayesian-optimisation",
          title: 'Released the preprint Graph Agnostic Causal Bayesian Optimisation.',
          description: "",
          section: "News",},{id: "news-attended-the-gemini-summer-school-on-addressing-the-gender-data-gap-in-medicine-and-the-application-of-n-of-1-trials-october-13-17-2025",
          title: 'Attended the GEMINI Summer School on addressing the gender data gap in medicine...',
          description: "",
          section: "News",},{id: "news-presented-clam-causal-spatial-disaggregation-to-infer-local-effects-from-coarse-data-at-the-neurips-2025-causcien-workshop",
          title: 'Presented CLAM: Causal Spatial Disaggregation to Infer Local Effects From Coarse Data at...',
          description: "",
          section: "News",},{id: "news-released-the-preprint-co-exploration-and-co-exploitation-via-shared-structure-in-multi-task-bandits",
          title: 'Released the preprint Co-Exploration and Co-Exploitation via Shared Structure in Multi-Task Bandits.',
          description: "",
          section: "News",},{id: "news-this-website-is-now-live-in-its-first-personalized-version",
          title: 'This website is now live in its first personalized version.',
          description: "",
          section: "News",},{id: "projects-multi-task-bandits-and-shared-priors",
          title: 'Multi-Task Bandits and Shared Priors',
          description: "How shared structure across tasks can make exploration more sample efficient.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multi-task-bandits/";
            },},{id: "projects-causal-decision-making-and-bayesian-optimization",
          title: 'Causal Decision-Making and Bayesian Optimization',
          description: "Using causal structure when interventions are expensive and graph knowledge is incomplete.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/causal-decision-making/";
            },},{id: "projects-interpretable-spatio-temporal-point-processes",
          title: 'Interpretable Spatio-Temporal Point Processes',
          description: "Event models for complex temporal and spatial dynamics, with interpretability kept in view.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/point-processes/";
            },},{id: "projects-clam-and-local-effect-estimation",
          title: 'CLAM and Local Effect Estimation',
          description: "Recovering local causal effects from coarse spatial data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clam/";
            },},{id: "projects-priors-from-language-models",
          title: 'Priors from Language Models',
          description: "Using foundation models as a source of Bayesian prior information.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-priors/";
            },},{id: "projects-research-project-template",
          title: 'Research Project Template',
          description: "Reusable structure for future project pages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template/";
            },},{id: "projects-fairness-aware-learning-systems",
          title: 'Fairness-Aware Learning Systems',
          description: "Earlier work on fairness metrics and algorithmic interventions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fairness-learning/";
            },},{id: "projects-human-and-bounded-rational-decision-models",
          title: 'Human and Bounded-Rational Decision Models',
          description: "Modeling rational agents with human biases in decision processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bounded-rationality/";
            },},{id: "projects-x-hacking-and-misguided-automl",
          title: 'X Hacking and Misguided AutoML',
          description: "Studying how automated model search can produce misleading scientific conclusions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/x-hacking/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sumantrak", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sumantrak", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UV2fWZ0AAAAJ", "_blank");
        },
      },{
        id: 'social-lesswrong',
        title: 'Lesswrong',
        section: 'Socials',
        handler: () => {
          window.open("https://www.lesswrong.com/users/sumantrak", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
