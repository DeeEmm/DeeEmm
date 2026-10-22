---
layout: page
title: Archives
permalink: /archives/
---

<div class="archive-header-intro">
  <p>An eclectic archive of code, hardware, automation, CNC, and random musings dating back to lunchtime 2006. Filter by category, year, or search for any keyword.</p>
</div>

<!-- Search and Filter Controls -->
<div class="archive-controls">
  <div class="archive-search-box">
    <svg class="archive-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input type="text" id="archiveSearchInput" placeholder="Filter posts by title, tag, or keyword..." autocomplete="off">
    <button id="clearSearchBtn" type="button" aria-label="Clear search" style="display: none;">&times;</button>
  </div>

  <!-- Category Filter Pills -->
  <div class="filter-group">
    <span class="filter-group-label">Category:</span>
    <div class="filter-pills-row" id="categoryFilterPills">
      <button type="button" class="filter-pill cat-pill active" data-category="all">All Categories</button>
      {% assign all_cats = site.posts | map: "category" | compact | uniq | sort_natural %}
      {% for cat in all_cats %}
        {% assign cat_clean = cat | strip %}
        {% if cat_clean != "" and cat_clean != "Your Category" %}
          <button type="button" class="filter-pill cat-pill" data-category="{{ cat_clean | downcase | escape }}">{{ cat_clean }}</button>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  
  <!-- Year Filter Pills -->
  <div class="filter-group">
    <span class="filter-group-label">Year:</span>
    <div class="filter-pills-row" id="yearFilterPills">
      <button type="button" class="filter-pill year-pill active" data-year="all">All Years</button>
      {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
      {% for year_group in posts_by_year %}
        <button type="button" class="filter-pill year-pill" data-year="{{ year_group.name }}">{{ year_group.name }}</button>
      {% endfor %}
    </div>
  </div>

  <div class="archive-status-bar">
    <div class="archive-count" id="archiveCount">Showing {{ site.posts.size }} posts</div>
    <button type="button" id="resetAllFiltersBtn" class="reset-filters-btn" style="display: none;">Reset all filters</button>
  </div>
</div>

<div class="archive-list" id="archiveList">
  {% for post in site.posts %}
  {% assign post_year = post.date | date: "%Y" %}
  {% assign post_cat = post.category | default: post.categories | first | default: "" | strip %}
  <article class="archive-card" data-year="{{ post_year }}" data-title="{{ post.title | downcase | escape }}" data-tags="{{ post.tags | join: ' ' | downcase | escape }}" data-category="{{ post_cat | downcase | escape }}">
    <a class="archive-card-link" href="{{ post.url | relative_url }}">
      <div class="archive-card-thumb">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" loading="lazy" />
        {% else %}
          <div class="archive-thumb-placeholder">
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="1.5" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
        {% endif %}
      </div>
      <div class="archive-card-content">
        <div class="archive-card-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
          {% if post_cat != "" and post_cat != "Your Category" %}
            <span class="archive-category-badge" data-category="{{ post_cat | downcase | escape }}">{{ post_cat }}</span>
          {% endif %}
        </div>
        <h3 class="archive-card-title">{{ post.title | escape }}</h3>
        <p class="archive-card-excerpt">{{ post.content | strip_html | strip_newlines | truncatewords: 24 }}</p>
      </div>
    </a>
  </article>
  {% endfor %}
  <div id="noArchiveResults" class="no-results-msg" style="display: none;">
    <p>No matching posts found. Try selecting another category or click "Reset all filters".</p>
  </div>
</div>

<script>
(function() {
  const searchInput = document.getElementById('archiveSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const resetBtn = document.getElementById('resetAllFiltersBtn');
  const yearPills = document.querySelectorAll('.year-pill');
  const catPills = document.querySelectorAll('.cat-pill');
  const cards = document.querySelectorAll('.archive-card');
  const countEl = document.getElementById('archiveCount');
  const noResults = document.getElementById('noArchiveResults');

  let activeYear = 'all';
  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    let visibleCount = 0;
    cards.forEach(card => {
      const cardYear = card.getAttribute('data-year');
      const cardCategory = card.getAttribute('data-category') || '';
      const title = card.getAttribute('data-title') || '';
      const tags = card.getAttribute('data-tags') || '';
      
      const matchesYear = (activeYear === 'all' || cardYear === activeYear);
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = !searchTerm || title.includes(searchTerm) || tags.includes(searchTerm) || cardCategory.includes(searchTerm);

      if (matchesYear && matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    countEl.textContent = `Showing ${visibleCount} of ${cards.length} posts`;
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    clearBtn.style.display = searchTerm ? 'block' : 'none';

    const isFiltered = activeYear !== 'all' || activeCategory !== 'all' || searchTerm !== '';
    if (resetBtn) resetBtn.style.display = isFiltered ? 'inline-block' : 'none';
  }

  function setCategory(cat) {
    activeCategory = (cat || 'all').toLowerCase();
    catPills.forEach(p => {
      if (p.getAttribute('data-category') === activeCategory) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
    filterCards();
  }

  function checkUrlParams() {
    const hash = window.location.hash;
    const search = window.location.search;
    const params = new URLSearchParams(search || hash.replace('#', '?'));
    const catParam = params.get('category');
    const yearParam = params.get('year');

    if (catParam) {
      setCategory(catParam);
    }
    if (yearParam) {
      activeYear = yearParam;
      yearPills.forEach(p => {
        if (p.getAttribute('data-year') === activeYear) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
      filterCards();
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      searchInput.focus();
      filterCards();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeYear = 'all';
      activeCategory = 'all';
      searchTerm = '';
      if (searchInput) searchInput.value = '';
      yearPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-year') === 'all'));
      catPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
      if (window.history.pushState) {
        window.history.pushState(null, '', window.location.pathname);
      }
      filterCards();
    });
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      setCategory(pill.getAttribute('data-category'));
    });
  });

  yearPills.forEach(pill => {
    pill.addEventListener('click', () => {
      yearPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeYear = pill.getAttribute('data-year');
      filterCards();
    });
  });

  document.querySelectorAll('.archive-category-badge').forEach(badge => {
    badge.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const cat = badge.getAttribute('data-category');
      if (cat) {
        setCategory(cat);
        window.scrollTo({ top: document.querySelector('.archive-controls').offsetTop - 20, behavior: 'smooth' });
      }
    });
  });

  checkUrlParams();
  window.addEventListener('hashchange', checkUrlParams);
})();
</script>
