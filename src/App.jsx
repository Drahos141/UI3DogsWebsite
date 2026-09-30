import { useState } from 'react'

const dogs = [
  {
    name: 'Milo',
    breed: 'Golden retriever',
    age: '2 years',
    location: 'Brooklyn, NY',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
    tag: 'Easygoing',
    description:
      'A sunshine-loving fetch enthusiast who thinks every new person is a long-lost friend.',
  },
  {
    name: 'Penny',
    breed: 'Cavalier spaniel',
    age: '1 year',
    location: 'Queens, NY',
    image:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85',
    tag: 'Little lovebug',
    description:
      'Small in size, huge in cuddles. Penny is happiest curled up beside her favorite human.',
  },
  {
    name: 'Bruno',
    breed: 'French bulldog',
    age: '3 years',
    location: 'Jersey City, NJ',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85',
    tag: 'Certified goofball',
    description:
      'Part-time nap champion and full-time comedian, Bruno brings the party wherever he goes.',
  },
]

const paws = ['paw-one', 'paw-two', 'paw-three', 'paw-four', 'paw-five']

function Icon({ name, size = 20 }) {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'arrow') {
    return (
      <svg {...shared}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg {...shared}>
        <path d="M20.8 8.7c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />
      </svg>
    )
  }

  if (name === 'pin') {
    return (
      <svg {...shared}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    )
  }

  return (
    <svg {...shared}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </svg>
  )
}

function App() {
  const [favorites, setFavorites] = useState([])
  const [selectedDog, setSelectedDog] = useState(null)
  const [profileOpen, setProfileOpen] = useState(false)
  const [joined, setJoined] = useState(false)

  function toggleFavorite(name) {
    setFavorites((current) =>
      current.includes(name)
        ? current.filter((favorite) => favorite !== name)
        : [...current, name],
    )
  }

  function joinClub(event) {
    event.preventDefault()
    setJoined(true)
  }

  return (
    <>
      <div className="falling-paws" aria-hidden="true">
        {paws.map((paw) => (
          <span className={`falling-paw ${paw}`} key={paw}>
            🐾
          </span>
        ))}
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Good Dogs Club home">
          <span className="brand-mark">🐾</span>
          <span>
            GOOD DOGS
            <small>CLUB</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#discover">Meet the dogs</a>
          <a href="#club">Our little club</a>
          <a href="#newsletter">Say hello</a>
        </nav>

        <div className="profile-wrap">
          <button
            className="profile-button"
            type="button"
            aria-expanded={profileOpen}
            onClick={() => setProfileOpen((open) => !open)}
          >
            <span className="avatar">J</span>
            <span className="profile-name">Jamie</span>
            <span className="profile-caret">⌄</span>
          </button>
          {profileOpen && (
            <div className="profile-menu">
              <strong>Hey, Jamie! <span>👋</span></strong>
              <span className="profile-count">
                {favorites.length
                  ? `${favorites.length} furry friend${favorites.length > 1 ? 's' : ''} saved`
                  : 'Your next best friend is waiting'}
              </span>
              <a href="#discover" onClick={() => setProfileOpen(false)}>
                Your saved pups <span>♡</span>
              </a>
              <a href="#newsletter" onClick={() => setProfileOpen(false)}>
                Club updates <span>↗</span>
              </a>
            </div>
          )}
        </div>
      </header>

      <main id="home">
        <section className="hero page-wrap">
          <div className="hero-copy">
            <span className="eyebrow"><span /> YOUR NEW FAVORITE CORNER OF THE INTERNET</span>
            <h1>Good dogs.<br />Good <em>days.</em></h1>
            <p>
              A little place for big dog energy. Meet your new best friend,
              find your people, and make every day a little more pawsome.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#discover">
                Meet the good dogs <Icon name="arrow" size={17} />
              </a>
              <a className="text-link" href="#club">Take a little look around</a>
            </div>
            <div className="hero-proof">
              <div className="mini-avatars" aria-hidden="true">
                <span>🐶</span><span>🐕</span><span>🐩</span>
              </div>
              <p><strong>1,200+</strong> happy tails and counting</p>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=90"
                alt="A happy golden retriever enjoying a sunny day"
              />
            </div>
            <div className="image-label">
              <span className="label-paw">🐾</span>
              <span><strong>Head of good vibes</strong><small>Every dog here, honestly</small></span>
            </div>
            <div className="floating-note"><span>✦</span> Certified good boy</div>
            <div className="round-stamp" aria-label="Good dogs only">
              <span>GOOD DOGS · ONLY · GOOD DOGS · ONLY · </span>
              <b>☺</b>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Good Dogs Club facts">
          <div className="stat"><strong>01</strong><span>A whole lot of<br />happy sniffing</span></div>
          <span className="stat-divider" />
          <div className="stat"><strong>100%</strong><span>Very good<br />dog energy</span></div>
          <span className="stat-divider" />
          <div className="stat"><strong>∞</strong><span>Reasons to<br />go for a walk</span></div>
          <div className="stat-aside">A good day starts with a dog. <span>Just saying.</span></div>
        </section>

        <section className="discover-section page-wrap" id="discover">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span /> YOUR MEET-CUTE STARTS HERE</span>
              <h2>Some very good <em>dogs.</em></h2>
              <p>Big personalities, little quirks, and excellent cuddle credentials.</p>
            </div>
            <a className="text-link browse-link" href="#newsletter">
              See what’s next <Icon name="arrow" size={16} />
            </a>
          </div>

          <div className="dog-grid">
            {dogs.map((dog, index) => (
              <article className="dog-card" key={dog.name}>
                <div className="dog-photo">
                  <img src={dog.image} alt={`${dog.name}, a ${dog.breed}`} loading="lazy" />
                  <span className="dog-tag">{dog.tag}</span>
                  <button
                    className={`favorite-button ${favorites.includes(dog.name) ? 'is-favorite' : ''}`}
                    type="button"
                    aria-label={`${favorites.includes(dog.name) ? 'Remove' : 'Save'} ${dog.name} ${favorites.includes(dog.name) ? 'from' : 'to'} favorites`}
                    aria-pressed={favorites.includes(dog.name)}
                    onClick={() => toggleFavorite(dog.name)}
                  >
                    <Icon name="heart" size={19} />
                  </button>
                </div>
                <div className="dog-info">
                  <div className="dog-title">
                    <div><h3>{dog.name}</h3><span>{dog.breed} · {dog.age}</span></div>
                    <button className="round-arrow" type="button" aria-label={`Meet ${dog.name}`} onClick={() => setSelectedDog(dog)}>
                      <Icon name="arrow" size={17} />
                    </button>
                  </div>
                  <p className="dog-location"><Icon name="pin" size={15} /> {dog.location}</p>
                </div>
                {index === 1 && <span className="dog-card-sparkle" aria-hidden="true">✳</span>}
              </article>
            ))}
          </div>
          <p className="browse-caption">There’s no such thing as too many dog photos. <span>You're welcome.</span></p>
        </section>

        <section className="club-section" id="club">
          <div className="club-inner page-wrap">
            <div className="club-illustration" aria-hidden="true">
              <div className="sun-disc" />
              <div className="club-photo">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85"
                  alt=""
                  loading="lazy"
                />
              </div>
              <span className="club-sticker">GOOD<br />HUMAN<br />ENERGY</span>
              <span className="club-doodle">✳</span>
            </div>
            <div className="club-copy">
              <span className="eyebrow"><span /> A LITTLE ABOUT US</span>
              <h2>For the love<br />of <em>the goodest.</em></h2>
              <p>
                Good Dogs Club is a happy home for dogs looking for people and
                people looking for dogs. We believe in long walks, second
                breakfasts, and making room on the couch.
              </p>
              <a className="button button-light" href="#newsletter">
                Come hang with us <Icon name="arrow" size={17} />
              </a>
              <div className="club-note"><span>“</span> No bad days when there’s a dog around. <b>— Club rule #1</b></div>
            </div>
          </div>
        </section>

        <section className="newsletter page-wrap" id="newsletter">
          <div className="newsletter-paw" aria-hidden="true">🐾</div>
          <span className="eyebrow"><span /> GOOD THINGS IN YOUR INBOX</span>
          <h2>More tail wags.<br /><em>Less boring mail.</em></h2>
          <p>New best friends, dog-friendly spots, and very important pupdates. The good stuff, only.</p>
          {joined ? (
            <div className="success-message" role="status">You’re in! Keep an eye out for some very good mail. 🐾</div>
          ) : (
            <form className="newsletter-form" onSubmit={joinClub}>
              <label className="visually-hidden" htmlFor="email-address">Your email address</label>
              <input id="email-address" type="email" placeholder="Your email address" required />
              <button className="button button-dark" type="submit">Count me in <Icon name="arrow" size={17} /></button>
            </form>
          )}
          <small className="newsletter-privacy">Good mail, no spam. Unsubscribe whenever.</small>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">🐾</span>
          <span>GOOD DOGS<small>CLUB</small></span>
        </a>
        <p>Made with love (and a little dog hair). © 2026 Good Dogs Club</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>

      {selectedDog && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedDog(null)
          }}
        >
          <section className="dog-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" type="button" aria-label="Close details" onClick={() => setSelectedDog(null)}>×</button>
            <img src={selectedDog.image} alt={`${selectedDog.name} the ${selectedDog.breed}`} />
            <div className="modal-content">
              <span className="eyebrow"><span /> VERY GOOD DOG ALERT</span>
              <h2 id="modal-title">Meet {selectedDog.name}.</h2>
              <p>{selectedDog.description}</p>
              <div className="modal-details"><span>{selectedDog.breed}</span><span>{selectedDog.age}</span><span>{selectedDog.location}</span></div>
              <a className="button button-dark" href="#newsletter" onClick={() => setSelectedDog(null)}>
                Ask about {selectedDog.name} <Icon name="arrow" size={17} />
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
