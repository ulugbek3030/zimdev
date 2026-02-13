/* ============================================
   Togora — Food Delivery App
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- Menu Data ---
    var menuItems = [
        { id: 1,  name: 'Плов по-ташкентски',     category: 'plov',   emoji: '🍚', desc: 'Рис, баранина, морковь, нут, зира',        weight: '400 г', price: 35000 },
        { id: 2,  name: 'Плов по-самаркандски',    category: 'plov',   emoji: '🍛', desc: 'Рис, говядина, морковь, изюм, барбарис',   weight: '400 г', price: 38000 },
        { id: 3,  name: 'Плов с перепёлками',      category: 'plov',   emoji: '🍚', desc: 'Рис, перепёлки, морковь, специи',           weight: '450 г', price: 45000 },
        { id: 4,  name: 'Лагман',                  category: 'soup',   emoji: '🍜', desc: 'Домашняя лапша, говядина, овощи',           weight: '450 г', price: 32000 },
        { id: 5,  name: 'Шурпа',                   category: 'soup',   emoji: '🥘', desc: 'Баранина, картофель, морковь, перец',        weight: '500 г', price: 30000 },
        { id: 6,  name: 'Мастава',                 category: 'soup',   emoji: '🍲', desc: 'Рис, говядина, овощи, зелень',              weight: '450 г', price: 28000 },
        { id: 7,  name: 'Нарын',                   category: 'soup',   emoji: '🍜', desc: 'Тонкая лапша, конина, бульон',              weight: '400 г', price: 35000 },
        { id: 8,  name: 'Шашлык из баранины',      category: 'kebab',  emoji: '🍢', desc: 'Сочная баранина на мангале',                weight: '250 г', price: 42000 },
        { id: 9,  name: 'Шашлык из курицы',        category: 'kebab',  emoji: '🍗', desc: 'Куриное филе на мангале',                   weight: '250 г', price: 28000 },
        { id: 10, name: 'Люля-кебаб',              category: 'kebab',  emoji: '🥙', desc: 'Рубленая баранина со специями',             weight: '200 г', price: 30000 },
        { id: 11, name: 'Самса с мясом',           category: 'pastry', emoji: '🥟', desc: 'Слоёное тесто, баранина, лук',              weight: '200 г', price: 15000 },
        { id: 12, name: 'Самса с тыквой',          category: 'pastry', emoji: '🥟', desc: 'Слоёное тесто, тыква, сахар',               weight: '180 г', price: 12000 },
        { id: 13, name: 'Манты',                   category: 'pastry', emoji: '🥟', desc: 'Тесто на пару, баранина, лук',              weight: '300 г (4 шт)', price: 28000 },
        { id: 14, name: 'Чебурек',                 category: 'pastry', emoji: '🥧', desc: 'Хрустящее тесто, говядина',                 weight: '200 г', price: 16000 },
        { id: 15, name: 'Ачичук',                  category: 'salad',  emoji: '🥗', desc: 'Помидоры, лук, зелень, перец',              weight: '250 г', price: 15000 },
        { id: 16, name: 'Шакароб',                 category: 'salad',  emoji: '🍅', desc: 'Помидоры, лук, острый перец',               weight: '250 г', price: 14000 },
        { id: 17, name: 'Овощной салат',            category: 'salad',  emoji: '🥒', desc: 'Огурцы, помидоры, редис, зелень',           weight: '250 г', price: 16000 },
        { id: 18, name: 'Компот',                  category: 'drinks', emoji: '🥤', desc: 'Домашний компот из сухофруктов',            weight: '500 мл', price: 8000 },
        { id: 19, name: 'Чай зелёный',             category: 'drinks', emoji: '🍵', desc: 'Узбекский зелёный чай (чайник)',            weight: '500 мл', price: 10000 },
        { id: 20, name: 'Айран',                   category: 'drinks', emoji: '🥛', desc: 'Кисломолочный напиток',                    weight: '300 мл', price: 7000 },
        { id: 21, name: 'Лимонад домашний',        category: 'drinks', emoji: '🍋', desc: 'Свежий лимон, мята, сахар',                weight: '400 мл', price: 12000 },
    ];

    // --- Cart State ---
    var cart = [];

    // --- DOM Elements ---
    var menuGrid = document.getElementById('menuGrid');
    var categoryTabs = document.getElementById('categoryTabs');
    var cartBtn = document.getElementById('cartBtn');
    var cartCount = document.getElementById('cartCount');
    var cartEl = document.getElementById('cart');
    var cartOverlay = document.getElementById('cartOverlay');
    var cartClose = document.getElementById('cartClose');
    var cartItems = document.getElementById('cartItems');
    var cartEmpty = document.getElementById('cartEmpty');
    var cartFooter = document.getElementById('cartFooter');
    var cartTotal = document.getElementById('cartTotal');
    var orderBtn = document.getElementById('orderBtn');
    var orderModal = document.getElementById('orderModal');
    var modalClose = document.getElementById('modalClose');
    var orderForm = document.getElementById('orderForm');
    var modalSubtotal = document.getElementById('modalSubtotal');
    var modalTotal = document.getElementById('modalTotal');
    var successModal = document.getElementById('successModal');
    var successClose = document.getElementById('successClose');
    var header = document.getElementById('header');
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');

    // --- Format Price ---
    function formatPrice(price) {
        return price.toLocaleString('ru-RU') + ' сум';
    }

    // --- Render Menu ---
    function renderMenu(category) {
        var items = category === 'all' ? menuItems : menuItems.filter(function (item) {
            return item.category === category;
        });

        menuGrid.innerHTML = items.map(function (item) {
            return '<div class="menu-card" data-id="' + item.id + '">' +
                '<div class="menu-card__image">' + item.emoji + '</div>' +
                '<div class="menu-card__body">' +
                    '<div class="menu-card__title">' + item.name + '</div>' +
                    '<div class="menu-card__desc">' + item.desc + '</div>' +
                    '<div class="menu-card__weight">' + item.weight + '</div>' +
                    '<div class="menu-card__footer">' +
                        '<div class="menu-card__price">' + formatPrice(item.price) + '</div>' +
                        '<button class="add-btn" data-id="' + item.id + '" aria-label="Добавить в корзину">+</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    renderMenu('all');

    // --- Category Tabs ---
    categoryTabs.addEventListener('click', function (e) {
        var tab = e.target.closest('.tab');
        if (!tab) return;

        categoryTabs.querySelectorAll('.tab').forEach(function (t) {
            t.classList.remove('active');
        });
        tab.classList.add('active');
        renderMenu(tab.dataset.category);
    });

    // --- Add to Cart ---
    menuGrid.addEventListener('click', function (e) {
        var btn = e.target.closest('.add-btn');
        if (!btn) return;

        var id = parseInt(btn.dataset.id, 10);
        var existing = cart.find(function (item) { return item.id === id; });

        if (existing) {
            existing.qty++;
        } else {
            var menuItem = menuItems.find(function (item) { return item.id === id; });
            cart.push({ id: menuItem.id, name: menuItem.name, emoji: menuItem.emoji, price: menuItem.price, qty: 1 });
        }

        updateCart();
        animateButton(btn);
    });

    function animateButton(btn) {
        btn.style.transform = 'scale(0.85)';
        btn.textContent = '✓';
        setTimeout(function () {
            btn.style.transform = '';
            btn.textContent = '+';
        }, 400);
    }

    // --- Update Cart ---
    function updateCart() {
        var totalQty = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
        var totalPrice = cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);

        cartCount.textContent = totalQty;
        if (totalQty > 0) {
            cartCount.classList.add('visible');
        } else {
            cartCount.classList.remove('visible');
        }

        if (cart.length === 0) {
            cartEmpty.style.display = '';
            cartItems.innerHTML = '';
            cartFooter.style.display = 'none';
        } else {
            cartEmpty.style.display = 'none';
            cartFooter.style.display = '';
            cartTotal.textContent = formatPrice(totalPrice);

            cartItems.innerHTML = cart.map(function (item) {
                return '<div class="cart-item" data-id="' + item.id + '">' +
                    '<div class="cart-item__emoji">' + item.emoji + '</div>' +
                    '<div class="cart-item__info">' +
                        '<div class="cart-item__name">' + item.name + '</div>' +
                        '<div class="cart-item__price">' + formatPrice(item.price * item.qty) + '</div>' +
                        '<div class="cart-item__controls">' +
                            '<button class="cart-item__btn cart-minus" data-id="' + item.id + '">−</button>' +
                            '<span class="cart-item__qty">' + item.qty + '</span>' +
                            '<button class="cart-item__btn cart-plus" data-id="' + item.id + '">+</button>' +
                        '</div>' +
                    '</div>' +
                    '<button class="cart-item__remove cart-remove" data-id="' + item.id + '">✕</button>' +
                '</div>';
            }).join('');
        }
    }

    // --- Cart Item Controls ---
    document.getElementById('cartBody').addEventListener('click', function (e) {
        var btn = e.target.closest('[data-id]');
        if (!btn || btn.classList.contains('cart-item')) return;

        var id = parseInt(btn.dataset.id, 10);
        var item = cart.find(function (i) { return i.id === id; });
        if (!item) return;

        if (btn.classList.contains('cart-plus')) {
            item.qty++;
        } else if (btn.classList.contains('cart-minus')) {
            item.qty--;
            if (item.qty <= 0) {
                cart = cart.filter(function (i) { return i.id !== id; });
            }
        } else if (btn.classList.contains('cart-remove')) {
            cart = cart.filter(function (i) { return i.id !== id; });
        }

        updateCart();
    });

    // --- Cart Open/Close ---
    function openCart() {
        cartEl.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        cartEl.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // --- Order Modal ---
    orderBtn.addEventListener('click', function () {
        closeCart();
        var totalPrice = cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
        modalSubtotal.textContent = formatPrice(totalPrice);
        modalTotal.textContent = formatPrice(totalPrice);
        orderModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', function () {
        orderModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    orderModal.addEventListener('click', function (e) {
        if (e.target === orderModal) {
            orderModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // --- Submit Order ---
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var address = document.getElementById('address').value.trim();
        var comment = document.getElementById('comment').value.trim();

        var totalPrice = cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);

        var orderText = '🛒 *Новый заказ с Togora!*\n\n';
        orderText += '👤 *Имя:* ' + name + '\n';
        orderText += '📞 *Телефон:* ' + phone + '\n';
        orderText += '📍 *Адрес:* ' + address + '\n';
        if (comment) {
            orderText += '💬 *Комментарий:* ' + comment + '\n';
        }
        orderText += '\n📋 *Заказ:*\n';
        cart.forEach(function (item) {
            orderText += item.emoji + ' ' + item.name + ' × ' + item.qty + ' — ' + formatPrice(item.price * item.qty) + '\n';
        });
        orderText += '\n💰 *Итого: ' + formatPrice(totalPrice) + '*';

        // Log order to console (in production this would go to a backend)
        console.log('Order placed:', orderText);

        // Close order modal, show success
        orderModal.classList.remove('active');
        successModal.classList.add('active');

        // Clear cart
        cart = [];
        updateCart();
        orderForm.reset();
    });

    // --- Success Modal Close ---
    successClose.addEventListener('click', function () {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    successModal.addEventListener('click', function (e) {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // --- Mobile Navigation ---
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            burger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // --- Header Scroll ---
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = header ? header.offsetHeight : 0;
                var pos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });

    // --- Intersection Observer for Animations ---
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.how__step, .contact__card').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

});
