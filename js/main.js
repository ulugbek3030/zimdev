/* ============================================
   ZimiDev — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Navigation ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu on link click
        nav.querySelectorAll('.nav__link').forEach(function (link) {
            link.addEventListener('click', function () {
                burger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // --- Header scroll effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Back to top ---
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Animated counters ---
    function animateCounters() {
        var counters = document.querySelectorAll('[data-count]');
        counters.forEach(function (counter) {
            if (counter.dataset.animated) return;

            var rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                counter.dataset.animated = 'true';
                var target = parseInt(counter.dataset.count, 10);
                var duration = 2000;
                var start = 0;
                var startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(eased * target).toLocaleString('ru-RU');
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        counter.textContent = target.toLocaleString('ru-RU');
                    }
                }
                requestAnimationFrame(step);
            }
        });
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // --- Car Selection (Brand -> Model -> Year) ---
    var carData = {
        chevrolet: {
            models: {
                'Cobalt': [2020, 2021, 2022, 2023, 2024, 2025, 2026],
                'Nexia 3': [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Malibu': [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                'Tracker': [2020, 2021, 2022, 2023, 2024, 2025, 2026],
                'Onix': [2022, 2023, 2024, 2025, 2026],
                'Spark': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
                'Damas': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
            }
        },
        hyundai: {
            models: {
                'Accent': [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Sonata': [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Tucson': [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Santa Fe': [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                'Elantra': [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
            }
        },
        kia: {
            models: {
                'K5': [2020, 2021, 2022, 2023, 2024, 2025],
                'Sportage': [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Seltos': [2020, 2021, 2022, 2023, 2024, 2025],
                'Rio': [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                'Cerato': [2018, 2019, 2020, 2021, 2022, 2023, 2024]
            }
        },
        toyota: {
            models: {
                'Camry': [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Corolla': [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                'RAV4': [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Land Cruiser': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                'Hilux': [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
            }
        },
        byd: {
            models: {
                'Song Plus': [2022, 2023, 2024, 2025, 2026],
                'Seal': [2023, 2024, 2025, 2026],
                'Han': [2022, 2023, 2024, 2025],
                'Tang': [2022, 2023, 2024, 2025],
                'Dolphin': [2023, 2024, 2025, 2026]
            }
        },
        chery: {
            models: {
                'Tiggo 4': [2019, 2020, 2021, 2022, 2023, 2024, 2025],
                'Tiggo 7 Pro': [2020, 2021, 2022, 2023, 2024, 2025],
                'Tiggo 8 Pro': [2021, 2022, 2023, 2024, 2025],
                'Arrizo': [2020, 2021, 2022, 2023, 2024]
            }
        },
        haval: {
            models: {
                'Jolion': [2021, 2022, 2023, 2024, 2025],
                'Dargo': [2022, 2023, 2024, 2025],
                'F7': [2019, 2020, 2021, 2022, 2023, 2024],
                'H6': [2021, 2022, 2023, 2024, 2025],
                'M6': [2022, 2023, 2024, 2025]
            }
        }
    };

    var selectBrand = document.getElementById('selectBrand');
    var selectModel = document.getElementById('selectModel');
    var selectYear = document.getElementById('selectYear');
    var selectBtn = document.getElementById('selectBtn');

    if (selectBrand) {
        selectBrand.addEventListener('change', function () {
            var brand = this.value;
            selectModel.innerHTML = '<option value="">Выберите модель</option>';
            selectYear.innerHTML = '<option value="">Сначала выберите модель</option>';
            selectYear.disabled = true;
            selectBtn.disabled = true;

            if (brand && carData[brand]) {
                selectModel.disabled = false;
                var models = Object.keys(carData[brand].models);
                models.forEach(function (model) {
                    var opt = document.createElement('option');
                    opt.value = model;
                    opt.textContent = model;
                    selectModel.appendChild(opt);
                });
            } else {
                selectModel.disabled = true;
            }
        });

        selectModel.addEventListener('change', function () {
            var brand = selectBrand.value;
            var model = this.value;
            selectYear.innerHTML = '<option value="">Выберите год</option>';
            selectBtn.disabled = true;

            if (brand && model && carData[brand] && carData[brand].models[model]) {
                selectYear.disabled = false;
                var years = carData[brand].models[model].slice().reverse();
                years.forEach(function (year) {
                    var opt = document.createElement('option');
                    opt.value = year;
                    opt.textContent = year;
                    selectYear.appendChild(opt);
                });
            } else {
                selectYear.disabled = true;
            }
        });

        selectYear.addEventListener('change', function () {
            selectBtn.disabled = !this.value;
        });

        selectBtn.addEventListener('click', function () {
            var brand = selectBrand.value;
            var model = selectModel.value;
            var year = selectYear.value;
            if (brand && model && year) {
                alert('Поиск запчастей: ' + brand.charAt(0).toUpperCase() + brand.slice(1) + ' ' + model + ' ' + year + '\n\nМагазин скоро откроется! Напишите нам в Telegram для подбора запчастей.');
            }
        });
    }

    // --- Search ---
    var searchInput = document.getElementById('searchInput');
    var searchBtn = document.getElementById('searchBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            var query = searchInput.value.trim();
            if (query) {
                alert('Поиск: «' + query + '»\n\nМагазин скоро откроется! Напишите нам в Telegram для подбора запчастей.');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // --- Search tags click ---
    document.querySelectorAll('.tag').forEach(function (tag) {
        tag.addEventListener('click', function () {
            searchInput.value = this.textContent;
            searchInput.focus();
        });
    });

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = header ? header.offsetHeight : 0;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // --- Intersection Observer for fade-in animations ---
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    var animatedElements = document.querySelectorAll('.category-card, .brand-card, .advantage-card, .delivery__option, .payment-card');
    animatedElements.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
