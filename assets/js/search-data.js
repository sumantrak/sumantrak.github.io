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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-learning-log-dynamical-systems",
        
          title: "Learning log: Dynamical Systems",
        
        description: "My first intro to the concepts of dynamical systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/into-dynamical-systems/";
          
        },
      },{id: "post-lecture-notes-towards-and-algorithmic-theory-of-machine-learning-via-kernel-methods",
        
          title: "Lecture notes: Towards and Algorithmic Theory of Machine Learning via Kernel Methods",
        
        description: "Notes and derivations from lecture by Boumediene Hamzi.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/algorithmic-theory-kernel-methods/";
          
        },
      },{id: "post-takeaways-from-rlss-2026",
        
          title: "Takeaways from RLSS 2026",
        
        description: "Recollecting learnings from RLSS, the big intuitions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/rlss/";
          
        },
      },{id: "post-learning-log-machine-learning-theory",
        
          title: "Learning log: Machine Learning Theory",
        
        description: "My understanding of machine learning theory",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ML-theory/";
          
        },
      },{id: "post-sampling-from-hard-distributions",
        
          title: "Sampling from Hard Distributions",
        
        description: "A friendly route from Bayes&#39; rule to Monte Carlo and rejection sampling.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/sampling-from-hard-distributions/";
          
        },
      },{id: "news-visited-saarbrucken-for-the-workshop-on-safe-and-causally-informed-deep-rl-on-may-23-24-2024",
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
          section: "News",},{id: "news-i-am-attending-the-reinforcement-learning-summer-school-in-milan-from-june-3-to-june-12-with-a-32-5-acceptance-rate",
          title: 'I am attending the Reinforcement Learning Summer School in Milan from June 3...',
          description: "",
          section: "News",},{id: "news-i-am-attending-the-machine-learning-summer-school-in-new-york-city-from-jun-15-to-jun-26-with-a-16-67-acceptance-rate",
          title: 'I am attending the Machine Learning Summer School in New York City from...',
          description: "",
          section: "News",},{id: "news-linear-llm-scm-benchmarking-llms-for-coefficient-elicitation-in-linear-gaussian-causal-models-is-accepted-to-the-structured-data-4-health-workshop-at-icml",
          title: 'Linear-LLM-SCM: Benchmarking LLMs for Coefficient Elicitation in Linear-Gaussian Causal Models is accepted to...',
          description: "",
          section: "News",},{id: "news-we-came-3rd-in-the-mlss-hackathon",
          title: 'We came 3rd in the MLSS Hackathon. 🥉',
          description: "",
          section: "News",},{id: "news-co-exploration-and-co-exploitation-via-shared-structure-in-multi-task-bandits-is-accepted-to-the-european-workshop-on-reinforcement-learning",
          title: 'Co-Exploration and Co-Exploitation via Shared Structure in Multi-Task Bandits is accepted to the...',
          description: "",
          section: "News",},{id: "news-distributionally-robust-warm-start-for-a-population-of-bandits-is-accepted-to-the-european-workshop-on-reinforcement-learning",
          title: 'Distributionally Robust Warm Start for a Population of Bandits is accepted to the...',
          description: "",
          section: "News",},{id: "news-i-am-attending-the-european-workshop-on-reinforcement-learning-ewrl-in-lille-and-visiting-prof-debabrota-basu",
          title: 'I am attending the European Workshop on Reinforcement Learning (EWRL) in Lille and...',
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%75%6B%68%65%72%6A%65%65%73%75%6D%61%6E%74%72%61%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
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
