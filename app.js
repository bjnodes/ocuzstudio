const CONTACT_EMAIL = 'ocuz.studio@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/hayoung.limm/';
const BOOKING_STORAGE_KEY = 'ocuz-booking-selection';

const imageLibrary = {
  commercial40001: './assets/portfolio/400-01.jpg',
  commercial40002: './assets/portfolio/400-02.jpg',
  commercial40003: './assets/portfolio/400-03.jpg',
  commercial40004: './assets/portfolio/400-04.jpg',
  commercial40005: './assets/portfolio/400-05.jpg',
  commercial40006: './assets/portfolio/400-06.jpg',
  paris01: './assets/portfolio/paris-01.jpg',
  paris02: './assets/portfolio/paris-02.jpg',
  paris03: './assets/portfolio/paris-03.jpg',
  paris04: './assets/portfolio/paris-04.jpg',
  paris05: './assets/portfolio/paris-05.jpg',
  kei01: './assets/portfolio/kei-01.jpg',
  kei02: './assets/portfolio/kei-02.jpg',
  kei03: './assets/portfolio/kei-03.jpg',
  kei04: './assets/portfolio/kei-04.jpg',
  kei05: './assets/portfolio/kei-05.jpg',
  kei06: './assets/portfolio/kei-06.jpg',
  paw01: './assets/portfolio/paw-01.jpg',
  paw02: './assets/portfolio/paw-02.jpg',
  paw03: './assets/portfolio/paw-03.jpg',
  paw04: './assets/portfolio/paw-04.jpg',
  paw05: './assets/portfolio/paw-05.jpg',
  paw06: './assets/portfolio/paw-06.jpg'
};

const packageLibrary = [
  {
    id: 'product-photography',
    label: 'Product Photography',
    eyebrow: 'SHOOTING',
    price: 'KRW 700,000부터',
    summary: 'Clean product-focused shooting for e-commerce, detail cuts, and launch visuals.',
    summaryKo: '이커머스, 디테일 컷, 신제품 런칭 비주얼에 적합한 제품 중심 촬영입니다.',
    features: ['기본 1세트 기준', '제품별 컷 수 협의', '기본 보정본 10장'],
    recommended: 'Recommended for product pages, still-life layouts, and clean visual updates.',
    recommendedKo: '제품 상세 페이지, 스틸라이프 구성, 기본 비주얼 업데이트에 적합합니다.'
  },
  {
    id: 'fashion-lookbook',
    label: 'Fashion / Lookbook',
    eyebrow: 'SHOOTING',
    price: 'KRW 1,800,000부터',
    summary: 'Lookbook and fashion shooting built for brand mood, styling rhythm, and season launches.',
    summaryKo: '브랜드 무드, 스타일링 리듬, 시즌 런칭을 위한 패션 / 룩북 촬영입니다.',
    features: ['하프데이 기준', '사전 무드 정리', '기본 보정본 20장'],
    recommended: 'Best for brand lookbooks, collection drops, and editorial fashion direction.',
    recommendedKo: '브랜드 룩북, 컬렉션 드롭, 에디토리얼 패션 촬영에 적합합니다.'
  },
  {
    id: 'space-photography',
    label: 'Space Photography',
    eyebrow: 'SHOOTING',
    price: 'KRW 900,000부터',
    summary: 'Interior and spatial shooting for studios, retail spaces, hospitality, and exhibitions.',
    summaryKo: '스튜디오, 리테일 공간, 호스피탈리티, 전시 공간을 위한 공간 촬영입니다.',
    features: ['반나절 기준', '공간 동선 협의', '기본 보정본 12장'],
    recommended: 'Suitable for brand spaces, showroom records, and spatial campaign assets.',
    recommendedKo: '브랜드 공간 기록, 쇼룸 아카이브, 공간 캠페인 비주얼에 적합합니다.'
  },
  {
    id: 'brand-campaign',
    label: 'Brand Campaign',
    eyebrow: 'SHOOTING',
    price: 'KRW 3,500,000부터',
    summary: 'Full campaign shooting for key visuals, seasonal launches, and larger brand storytelling.',
    summaryKo: '키 비주얼, 시즌 런칭, 규모 있는 브랜드 스토리텔링을 위한 캠페인 촬영입니다.',
    features: ['풀데이 기준', '비주얼 디렉션 협업', '기본 보정본 30장'],
    recommended: 'Best for hero campaigns, full brand launches, and multi-channel asset production.',
    recommendedKo: '메인 캠페인, 브랜드 런칭, 멀티 채널 비주얼 제작에 적합합니다.'
  }
];

const archiveCatalog = {
  commercial: {
    label: 'COMMERCIAL',
    pageTitle: 'Commercial',
    pageDescription: '브랜드와 제품 중심의 커머셜 작업만 별도로 모아둔 아카이브입니다.',
    groups: [
      {
        id: 'brands',
        label: 'Brands',
        intro: '현재 공개된 커머셜 프로젝트는 400 시리즈입니다.',
        items: [
          {
            id: '400-commercial',
            brand: '400',
            title: '400',
            subtitle: 'Commercial stills centered on product clarity and restrained beauty details.',
            subtitleKo: '제품과 디테일을 중심으로 구성한 커머셜 스틸 시리즈입니다.',
            location: '서울',
            deliverables: '커머셜 / 브랜드 / 제품 비주얼',
            year: '2026',
            description: 'A commercial series shaped to keep the product clear while maintaining a soft but intentional editorial finish.',
            descriptionKo: '현재 아카이브에서 커머셜 작업으로 분류되는 대표 시리즈입니다. 제품이 명확하게 보이도록 구성하면서도, 뷰티 디테일과 부드럽지만 의도적인 에디토리얼 마감을 함께 가져가도록 작업했습니다.',
            link: 'https://www.behance.net/gallery/245522087/400-',
            images: [
              imageLibrary.commercial40001,
              imageLibrary.commercial40002,
              imageLibrary.commercial40003,
              imageLibrary.commercial40004,
              imageLibrary.commercial40005,
              imageLibrary.commercial40006
            ]
          }
        ]
      }
    ]
  },
  project: {
    label: 'PROJECT',
    pageTitle: 'Project',
    pageDescription: '런웨이와 도시, 시즌의 결을 담은 프로젝트 중심 아카이브입니다.',
    groups: [
      {
        id: '2026',
        label: '2026',
        intro: '2026년 기준 공개된 프로젝트 작업입니다.',
        items: [
          {
            id: 'project-paris-fashion-weeks',
            brand: 'Paris Fashion Weeks',
            title: 'Paris Fashion Weeks',
            subtitle: 'A city-facing project sequence built around fashion-week atmosphere and movement.',
            subtitleKo: '패션위크의 공기와 이동의 결을 함께 담은 프로젝트 시퀀스입니다.',
            location: '파리',
            deliverables: '프로젝트 아카이브 / 에디토리얼 노트 / 도시 시퀀스',
            year: '2026',
            description: 'A project that records not only the event itself but also the surrounding atmosphere and transitions of the city.',
            descriptionKo: '이 프로젝트는 행사 자체보다 장소의 공기까지 함께 다루는 작업입니다. 패션 위크를 둘러싼 이동과 분위기를 이미지 흐름 안에 남겨두는 에디토리얼 브리지에 가깝습니다.',
            link: 'https://www.behance.net/gallery/245523613/Paris-fashion-weeks',
            images: [imageLibrary.paris01, imageLibrary.paris02, imageLibrary.paris03, imageLibrary.paris04, imageLibrary.paris05]
          },
          {
            id: 'project-kei-runway',
            brand: 'Noir Kei Ninomiya',
            title: 'PFW Noir Kei Ninomiya Runway',
            subtitle: 'A runway study centered on silhouette, spacing, and sculptural contrast.',
            subtitleKo: '실루엣과 간격, 조형적인 대비를 중심으로 정리한 런웨이 프로젝트입니다.',
            location: '파리 패션위크',
            deliverables: '프로젝트 아카이브 / 런웨이 스터디',
            year: '2026',
            description: 'This sequence is arranged less as a show report and more as a project note on silhouette, spacing, and runway tension.',
            descriptionKo: '프로젝트 아카이브 안에서는 이 시리즈를 단순한 쇼 리포트가 아니라 실루엣과 간격, 그리고 런웨이의 긴장을 정리한 프로젝트 노트처럼 구성했습니다.',
            link: 'https://www.behance.net/gallery/245525465/pfw-noir-Kei-ninomiya-runway',
            images: [imageLibrary.kei01, imageLibrary.kei02, imageLibrary.kei03, imageLibrary.kei04, imageLibrary.kei05, imageLibrary.kei06]
          },
          {
            id: 'project-paw-florentina',
            brand: 'PAW',
            title: 'PAW Florentina Leitner Runway',
            subtitle: 'A runway diary shaped through texture, gesture, and editorial rhythm.',
            subtitleKo: '질감과 움직임, 에디토리얼 리듬으로 편집한 런웨이 다이어리입니다.',
            location: '파리 패션위크',
            deliverables: '프로젝트 아카이브 / 런웨이 다이어리',
            year: '2026',
            description: 'A runway sequence edited to preserve immediacy while giving the archive a calmer and more deliberate rhythm.',
            descriptionKo: '이 프로젝트 항목은 런웨이의 즉시성을 유지하면서도 보다 차분한 리듬으로 편집한 시퀀스입니다. 가까운 거리감과 질감을 살리면서도 아카이브로 남을 수 있도록 정제했습니다.',
            link: 'https://www.behance.net/gallery/245526857/paw-florentina-leitner-runway',
            images: [imageLibrary.paw01, imageLibrary.paw02, imageLibrary.paw03, imageLibrary.paw04, imageLibrary.paw05, imageLibrary.paw06]
          }
        ]
      }
    ]
  }
};

const feedCards = [
  { title: '400 Commercial', caption: 'Commercial stills focused on product presence and beauty detail.', captionKo: '제품 중심의 커머셜 스틸과 뷰티 디테일 작업입니다.', image: imageLibrary.commercial40002, tag: '커머셜 / 서울' },
  { title: 'Paris Fashion Weeks', caption: 'A project sequence capturing atmosphere, transit, and city rhythm.', captionKo: '도시의 공기와 이동의 리듬을 담은 프로젝트입니다.', image: imageLibrary.paris03, tag: '프로젝트 / 파리' },
  { title: 'Noir Kei Ninomiya', caption: 'A runway study built around form, contrast, and spacing.', captionKo: '형태와 대비를 중심으로 정리한 런웨이 프로젝트입니다.', image: imageLibrary.kei02, tag: '프로젝트 / PFW' },
  { title: 'PAW Florentina Leitner', caption: 'A runway diary edited through texture, gesture, and calm rhythm.', captionKo: '질감과 호흡을 중심으로 편집한 런웨이 다이어리입니다.', image: imageLibrary.paw04, tag: '프로젝트 / PFW' }
];

const masonryItems = [
  { title: '400 / 01', category: 'Commercial', src: imageLibrary.commercial40001, ratio: 'portrait', start: 1, span: 4, shift: '-12px', mt: '40px' },
  { title: '400 / 02', category: 'Commercial', src: imageLibrary.commercial40002, ratio: 'portrait', start: 5, span: 3, shift: '8px', mt: '0px' },
  { title: '400 / 03', category: 'Commercial', src: imageLibrary.commercial40003, ratio: 'portrait', start: 9, span: 4, shift: '-6px', mt: '110px' },
  { title: '400 / 04', category: 'Commercial', src: imageLibrary.commercial40004, ratio: 'landscape', start: 2, span: 5, shift: '0px', mt: '10px' },
  { title: '400 / 05', category: 'Commercial', src: imageLibrary.commercial40005, ratio: 'portrait', start: 8, span: 3, shift: '14px', mt: '140px' },
  { title: '400 / 06', category: 'Commercial', src: imageLibrary.commercial40006, ratio: 'portrait', start: 10, span: 3, shift: '-10px', mt: '40px' },
  { title: 'Paris / 01', category: 'Project', src: imageLibrary.paris01, ratio: 'portrait', start: 1, span: 3, shift: '10px', mt: '150px' },
  { title: 'Paris / 02', category: 'Project', src: imageLibrary.paris02, ratio: 'landscape', start: 4, span: 5, shift: '-16px', mt: '60px' },
  { title: 'Paris / 03', category: 'Project', src: imageLibrary.paris03, ratio: 'portrait', start: 9, span: 3, shift: '12px', mt: '180px' },
  { title: 'Paris / 04', category: 'Project', src: imageLibrary.paris04, ratio: 'portrait', start: 2, span: 4, shift: '-8px', mt: '20px' },
  { title: 'Paris / 05', category: 'Project', src: imageLibrary.paris05, ratio: 'landscape', start: 7, span: 5, shift: '0px', mt: '90px' },
  { title: 'Kei / 01', category: 'Project', src: imageLibrary.kei01, ratio: 'portrait', start: 1, span: 4, shift: '16px', mt: '90px' },
  { title: 'Kei / 02', category: 'Project', src: imageLibrary.kei02, ratio: 'portrait', start: 6, span: 3, shift: '-10px', mt: '0px' },
  { title: 'Kei / 03', category: 'Project', src: imageLibrary.kei03, ratio: 'portrait', start: 9, span: 4, shift: '8px', mt: '130px' },
  { title: 'Kei / 04', category: 'Project', src: imageLibrary.kei04, ratio: 'landscape', start: 3, span: 5, shift: '0px', mt: '45px' },
  { title: 'Kei / 05', category: 'Project', src: imageLibrary.kei05, ratio: 'portrait', start: 8, span: 3, shift: '-14px', mt: '170px' },
  { title: 'Kei / 06', category: 'Project', src: imageLibrary.kei06, ratio: 'portrait', start: 11, span: 2, shift: '0px', mt: '30px' },
  { title: 'PAW / 01', category: 'Project', src: imageLibrary.paw01, ratio: 'portrait', start: 1, span: 3, shift: '-6px', mt: '140px' },
  { title: 'PAW / 02', category: 'Project', src: imageLibrary.paw02, ratio: 'landscape', start: 4, span: 4, shift: '14px', mt: '60px' },
  { title: 'PAW / 03', category: 'Project', src: imageLibrary.paw03, ratio: 'portrait', start: 8, span: 3, shift: '-12px', mt: '0px' },
  { title: 'PAW / 04', category: 'Project', src: imageLibrary.paw04, ratio: 'portrait', start: 10, span: 3, shift: '8px', mt: '150px' },
  { title: 'PAW / 05', category: 'Project', src: imageLibrary.paw05, ratio: 'portrait', start: 2, span: 4, shift: '0px', mt: '20px' },
  { title: 'PAW / 06', category: 'Project', src: imageLibrary.paw06, ratio: 'landscape', start: 7, span: 5, shift: '-8px', mt: '100px' }
];

const timeOptions = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];

function getBookingSelection() {
  try {
    return JSON.parse(localStorage.getItem(BOOKING_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function setBookingSelection(nextSelection) {
  localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(nextSelection));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatDateLabel(isoDate) {
  return new Intl.DateTimeFormat('ko-KR', { weekday: 'short', month: 'long', day: 'numeric' }).format(new Date(`${isoDate}T12:00:00`));
}

function renderArchivePage(mode) {
  const groupsEl = document.getElementById('archiveGroups');
  const itemsEl = document.getElementById('archiveItems');
  const detailEl = document.getElementById('archiveDetail');
  const leadEl = document.getElementById('archiveLead');
  const titleEl = document.getElementById('archiveTitle');
  if (!groupsEl || !itemsEl || !detailEl) return;

  const archive = archiveCatalog[mode];
  let activeGroupId = archive.groups[0].id;
  let activeItemId = archive.groups[0].items[0].id;

  if (titleEl) titleEl.textContent = archive.pageTitle;
  if (leadEl) leadEl.textContent = archive.pageDescription;

  function getGroup() {
    return archive.groups.find((group) => group.id === activeGroupId) || archive.groups[0];
  }

  function getItem() {
    const group = getGroup();
    return group.items.find((item) => item.id === activeItemId) || group.items[0];
  }

  function render() {
    groupsEl.innerHTML = archive.groups
      .map((group) => `<button type="button" class="archive-link ${group.id === activeGroupId ? 'is-active' : ''}" data-group-id="${group.id}">${escapeHtml(group.label)}</button>`)
      .join('');

    const group = getGroup();
    itemsEl.innerHTML = [
      `<p class="archive-note">${escapeHtml(group.intro)}</p>`,
      ...group.items.map((item) => `<button type="button" class="archive-link ${item.id === activeItemId ? 'is-active' : ''}" data-item-id="${item.id}">${escapeHtml(item.brand)} / ${escapeHtml(item.title)}</button>`)
    ].join('');

    const item = getItem();
    detailEl.innerHTML = `
      <article>
        <p class="eyebrow">${escapeHtml(item.year)} / ${escapeHtml(item.brand)}</p>
        <h2 class="archive-detail__title">${escapeHtml(item.title)}</h2>
        <p class="archive-detail__subtitle">${escapeHtml(item.subtitle)}</p>
        <p class="archive-detail__subtitle-ko">${escapeHtml(item.subtitleKo || '')}</p>
        <div class="archive-detail__meta">
          <span><strong>장소</strong> ${escapeHtml(item.location)}</span>
          <span><strong>구성</strong> ${escapeHtml(item.deliverables)}</span>
        </div>
        <p class="archive-detail__description">${escapeHtml(item.description)}</p>
        <p class="archive-detail__description-ko">${escapeHtml(item.descriptionKo || '')}</p>
        <div class="archive-detail__actions">
          <a class="button button--primary" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">Behance 보기</a>
          <a class="button button--ghost" href="contact.html">문의하기</a>
        </div>
        <div class="archive-gallery">
          ${item.images.map((image, index) => `
            <figure class="scroll-focus-item" data-lightbox-src="${escapeHtml(image)}" data-lightbox-caption="${escapeHtml(item.title)} / ${index + 1}">
              <img src="${escapeHtml(image)}" alt="${escapeHtml(item.title)} image ${index + 1}" loading="lazy" />
            </figure>
          `).join('')}
        </div>
      </article>
    `;
    setupScrollFocus(detailEl.querySelectorAll('.scroll-focus-item'));
  }

  groupsEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-group-id]');
    if (!button) return;
    activeGroupId = button.dataset.groupId;
    activeItemId = getGroup().items[0].id;
    render();
  });

  itemsEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-item-id]');
    if (!button) return;
    activeItemId = button.dataset.itemId;
    render();
  });

  detailEl.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-lightbox-src]');
    if (!trigger) return;
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxCaption || 'OCUZ STUDIO');
  });

  render();
}
function renderPricing(gridId = 'pricingGrid', allowRedirect = false) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const bookingSelection = getBookingSelection();
  const selectedPackageId = bookingSelection.packageId || packageLibrary[1].id;
  grid.dataset.allowRedirect = allowRedirect ? 'true' : 'false';

  grid.innerHTML = packageLibrary
    .map((pkg) => `
      <article class="package-card">
        <div>
          <p class="package-card__eyebrow">${escapeHtml(pkg.eyebrow)}</p>
          <h3>${escapeHtml(pkg.label)}</h3>
          <strong class="package-card__price">${escapeHtml(pkg.price)}</strong>
          <p>${escapeHtml(pkg.summary)}</p>
          <p class="package-card__translation">${escapeHtml(pkg.summaryKo || '')}</p>
        </div>
        <ul>
          ${pkg.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}
        </ul>
        <div class="package-card__footer">
          <span>
            ${escapeHtml(pkg.recommended)}
            <span class="package-card__translation-note">${escapeHtml(pkg.recommendedKo || '')}</span>
          </span>
          <button type="button" class="package-card__button ${pkg.id === selectedPackageId ? 'is-active' : ''}" data-package-id="${pkg.id}">${allowRedirect ? '예약으로 이동' : '선택'}</button>
        </div>
      </article>
    `)
    .join('');

  if (grid.dataset.bound === 'true') return;
  grid.dataset.bound = 'true';

  grid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-package-id]');
    if (!button) return;
    const selectedPackage = packageLibrary.find((pkg) => pkg.id === button.dataset.packageId) || packageLibrary[1];
    const nextSelection = {
      ...getBookingSelection(),
      packageId: selectedPackage.id,
      packageLabel: selectedPackage.label,
      packagePrice: selectedPackage.price
    };
    setBookingSelection(nextSelection);
    if (grid.dataset.allowRedirect === 'true') {
      window.location.href = 'booking.html';
      return;
    }
    renderPricing(gridId, false);
  });
}
function renderFeed() {
  const grid = document.getElementById('feedGrid');
  if (!grid) return;
  grid.innerHTML = feedCards.map((card) => `
    <article class="feed-card">
      <a href="${INSTAGRAM_URL}" target="_blank" rel="noreferrer">
        <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.title)}" loading="lazy" />
      </a>
      <div class="feed-card__copy">
        <strong>${escapeHtml(card.tag)}</strong>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.caption)}</p>
        <p class="feed-card__translation">${escapeHtml(card.captionKo || '')}</p>
      </div>
    </article>
  `).join('');
}
function renderMasonry() {
  const grid = document.getElementById('masonryGrid');
  if (!grid) return;
  grid.innerHTML = masonryItems.map((item) => `
    <article
      class="masonry-card scroll-focus-item"
      data-ratio="${escapeHtml(item.ratio)}"
      tabindex="0"
      data-lightbox-src="${escapeHtml(item.src)}"
      data-lightbox-caption="${escapeHtml(item.title)} / ${escapeHtml(item.category)}"
      style="--col-start:${escapeHtml(item.start)}; --col-span:${escapeHtml(item.span)}; --item-shift:${escapeHtml(item.shift)}; --item-mt:${escapeHtml(item.mt)};"
    >
      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" loading="lazy" />
      <div class="masonry-card__caption">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.category)}</span>
      </div>
    </article>
  `).join('');

  setupScrollFocus(grid.querySelectorAll('.scroll-focus-item'));

  grid.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-lightbox-src]');
    if (!trigger) return;
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxCaption || 'OCUZ STUDIO');
  });

  grid.addEventListener('keydown', (event) => {
    const trigger = event.target.closest('[data-lightbox-src]');
    if (!trigger || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    openLightbox(trigger.dataset.lightboxSrc, trigger.dataset.lightboxCaption || 'OCUZ STUDIO');
  });
}
function renderBooking() {
  const calendarGrid = document.getElementById('calendarGrid');
  const monthLabel = document.getElementById('calendarMonthLabel');
  const timeSlotsEl = document.getElementById('timeSlots');
  if (!calendarGrid || !monthLabel || !timeSlotsEl) return;

  const bookingPackageName = document.getElementById('bookingPackageName');
  const bookingPackagePrice = document.getElementById('bookingPackagePrice');
  const bookingDateLabel = document.getElementById('bookingDateLabel');
  const bookingTimeLabel = document.getElementById('bookingTimeLabel');
  const prevMonthButton = document.getElementById('prevMonthButton');
  const nextMonthButton = document.getElementById('nextMonthButton');
  const proceedButton = document.getElementById('bookingProceed');

  const stored = getBookingSelection();
  let state = {
    packageId: stored.packageId || packageLibrary[1].id,
    selectedDate: stored.selectedDate || '',
    selectedTime: stored.selectedTime || '',
    calendarMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  };

  function currentPackage() {
    return packageLibrary.find((pkg) => pkg.id === state.packageId) || packageLibrary[1];
  }

  function sync() {
    const pkg = currentPackage();
    bookingPackageName.textContent = pkg.label;
    bookingPackagePrice.textContent = pkg.price;
    bookingDateLabel.textContent = state.selectedDate ? formatDateLabel(state.selectedDate) : '날짜를 선택해 주세요';
    bookingTimeLabel.textContent = state.selectedTime || '시간을 선택해 주세요';
    setBookingSelection({
      packageId: pkg.id,
      packageLabel: pkg.label,
      packagePrice: pkg.price,
      selectedDate: state.selectedDate,
      selectedTime: state.selectedTime
    });
  }

  function renderCalendar() {
    monthLabel.textContent = new Intl.DateTimeFormat('ko-KR', { month: 'long', year: 'numeric' }).format(state.calendarMonth);
    const firstDay = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth(), 1);
    const startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() + 1, 0).getDate();
    const cells = [];

    for (let index = 0; index < startOffset; index += 1) {
      cells.push('<span class="calendar-day is-muted"></span>');
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth(), day);
      const iso = toIsoDate(date);
      const isPast = startOfDay(date) < startOfDay(new Date());
      const isSunday = date.getDay() === 0;
      cells.push(`
        <button type="button" class="calendar-day ${iso === state.selectedDate ? 'is-active' : ''} ${(isPast || isSunday) ? 'is-muted' : ''}" data-date="${iso}" ${(isPast || isSunday) ? 'disabled' : ''}>
          <span>${day}</span>
        </button>
      `);
    }

    calendarGrid.innerHTML = cells.join('');
  }

  function renderTimeSlots() {
    timeSlotsEl.innerHTML = timeOptions
      .map((time) => `<button type="button" class="time-slot ${time === state.selectedTime ? 'is-active' : ''}" data-time="${time}">${time}</button>`)
      .join('');
  }

  calendarGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-date]');
    if (!button || button.disabled) return;
    state.selectedDate = button.dataset.date;
    renderCalendar();
    sync();
  });

  timeSlotsEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-time]');
    if (!button) return;
    state.selectedTime = button.dataset.time;
    renderTimeSlots();
    sync();
  });

  if (prevMonthButton) {
    prevMonthButton.addEventListener('click', () => {
      state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() - 1, 1);
      renderCalendar();
    });
  }

  if (nextMonthButton) {
    nextMonthButton.addEventListener('click', () => {
      state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() + 1, 1);
      renderCalendar();
    });
  }

  if (proceedButton) {
    proceedButton.addEventListener('click', () => {
      sync();
      window.location.href = 'contact.html';
    });
  }

  renderPricing('bookingPackageGrid', false);
  renderCalendar();
  renderTimeSlots();
  sync();
}

function hydrateContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const serviceSelect = document.getElementById('serviceSelect');
  const selectedPackageInput = document.getElementById('selectedPackageInput');
  const preferredDateInput = document.getElementById('preferredDateInput');
  const preferredTimeInput = document.getElementById('preferredTimeInput');
  const formStatus = document.getElementById('formStatus');
  const submitButton = document.getElementById('submitButton');
  const bookingRecall = document.getElementById('bookingRecall');

  const stored = getBookingSelection();
  serviceSelect.innerHTML = packageLibrary.map((pkg) => `<option value="${escapeHtml(pkg.id)}" ${pkg.id === (stored.packageId || packageLibrary[1].id) ? 'selected' : ''}>${escapeHtml(pkg.label)} / ${escapeHtml(pkg.price)}</option>`).join('');

  function syncHiddenFields() {
    const selection = getBookingSelection();
    const pkg = packageLibrary.find((item) => item.id === serviceSelect.value) || packageLibrary[1];
    selectedPackageInput.value = `${pkg.label} / ${pkg.price}`;
    preferredDateInput.value = selection.selectedDate ? formatDateLabel(selection.selectedDate) : '';
    preferredTimeInput.value = selection.selectedTime || '';
    if (bookingRecall) {
      bookingRecall.innerHTML = `${selectedPackageInput.value || '패키지 미선택'}<br />${preferredDateInput.value || '날짜 미선택'} / ${preferredTimeInput.value || '시간 미선택'}`;
    }
  }

  serviceSelect.addEventListener('change', () => {
    const selection = getBookingSelection();
    const pkg = packageLibrary.find((item) => item.id === serviceSelect.value) || packageLibrary[1];
    setBookingSelection({ ...selection, packageId: pkg.id, packageLabel: pkg.label, packagePrice: pkg.price });
    syncHiddenFields();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    syncHiddenFields();
    const formData = new FormData(form);
    formData.set('selected_package', selectedPackageInput.value);
    formData.set('preferred_date', preferredDateInput.value);
    formData.set('preferred_time', preferredTimeInput.value);

    submitButton.disabled = true;
    submitButton.classList.add('is-loading');
    formStatus.textContent = '문의 내용을 스튜디오 메일로 전송하고 있습니다...';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      serviceSelect.value = getBookingSelection().packageId || packageLibrary[1].id;
      syncHiddenFields();
      formStatus.textContent = '문의가 정상적으로 전송되었습니다. 곧 스튜디오 메일에서 확인할 수 있습니다.';
    } catch (error) {
      console.error(error);
      formStatus.innerHTML = `전송이 완료되지 않았습니다. <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> 로 직접 메일을 보내 주세요.`;
    } finally {
      submitButton.disabled = false;
      submitButton.classList.remove('is-loading');
    }
  });

  syncHiddenFields();
}
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = src;
  lightboxCaption.textContent = caption;
  if (!lightbox.open) lightbox.showModal();
}

function setupScrollFocus(nodeList) {
  const items = [...nodeList];
  if (!items.length) return;

  let ticking = false;

  function update() {
    const viewportCenter = window.innerHeight * 0.5;
    const viewportHeight = window.innerHeight || 1;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(viewportCenter - itemCenter);
      const normalized = Math.min(distance / (viewportHeight * 0.88), 1);
      const edgeWeight = Math.max((normalized - 0.44) / 0.56, 0);
      const blur = (edgeWeight * 3.8).toFixed(2);
      const opacity = (1 - edgeWeight * 0.14).toFixed(3);
      const scale = (1 - edgeWeight * 0.026).toFixed(3);
      item.style.setProperty('--focus-blur', `${blur}px`);
      item.style.setProperty('--focus-opacity', opacity);
      item.style.setProperty('--focus-scale', scale);
    });

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  requestUpdate();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeButton = document.getElementById('lightboxClose');
  if (!lightbox || !closeButton) return;
  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.open) lightbox.close();
  });
}

function setupReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  elements.forEach((element) => observer.observe(element));
}

function setupHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });
}

function setupHomeScrollCue() {
  const cue = document.getElementById('scrollCue');
  const target = document.querySelector('.home-links');
  if (!cue || !target) return;

  function syncCue() {
    cue.classList.toggle('is-hidden', window.scrollY > 24);
  }

  cue.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  syncCue();
  window.addEventListener('scroll', syncCue, { passive: true });
}
function setupLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  window.setTimeout(() => loader.classList.add('is-hidden'), 220);
}

function init() {
  const page = document.body.dataset.page;
  if (page === 'commercial') renderArchivePage('commercial');
  if (page === 'project') renderArchivePage('project');
  if (page === 'home') renderMasonry();
  if (page === 'home') setupHomeScrollCue();
  if (page === 'pricing') renderPricing('pricingGrid', true);
  if (page === 'booking') renderBooking();
  if (page === 'about') renderFeed();
  if (page === 'contact') hydrateContactForm();

  setupLightbox();
  setupReveal();
  setupHeader();
  setupLoader();
}

init();








