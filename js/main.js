/* ============================================
   Togora — Food Delivery (Yandex Eda style)
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ===== MENU DATA =====
    const menuItems = [
        // === ПЛОВ ===
        {
            id: 1, name: 'Плов по-ташкентски', category: 'plov',
            desc: 'Классический узбекский плов с бараниной, морковью зирвак, нутом и зирой. Подаётся с салатом ачичук.',
            price: 38000, weight: '400 г', time: '35 мин',
            img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop',
            badge: 'Хит', badgeType: 'hit', popular: true, rating: 4.9, orders: 1240
        },
        {
            id: 2, name: 'Плов с перепёлками', category: 'plov',
            desc: 'Праздничный плов с целыми перепёлками, айвой и барбарисом на курдючном жире.',
            price: 52000, weight: '450 г', time: '40 мин',
            img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.8, orders: 340
        },
        {
            id: 3, name: 'Плов свадебный', category: 'plov',
            desc: 'Богатый плов с бараниной, нутом, изюмом, айвой. Готовится на открытом огне в казане.',
            price: 45000, weight: '450 г', time: '40 мин',
            img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=400&fit=crop',
            badge: 'Новинка', badgeType: 'new', popular: true, rating: 4.9, orders: 890
        },
        {
            id: 4, name: 'Плов с говядиной', category: 'plov',
            desc: 'Плов из девзиры с нежной говядиной и сочной морковью. Классический рецепт.',
            price: 36000, weight: '400 г', time: '35 мин',
            img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.7, orders: 620
        },

        // === ШАШЛЫК ===
        {
            id: 5, name: 'Шашлык из баранины', category: 'kebab',
            desc: 'Сочные кусочки баранины на углях с кольцами лука, зеленью и лавашом.',
            price: 42000, weight: '250 г', time: '25 мин',
            img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&h=400&fit=crop',
            badge: 'Хит', badgeType: 'hit', popular: true, rating: 4.9, orders: 1560
        },
        {
            id: 6, name: 'Люля-кебаб', category: 'kebab',
            desc: 'Рубленое мясо баранины с луком и специями на шампуре. Подаётся с сумаляком.',
            price: 35000, weight: '200 г', time: '20 мин',
            img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&h=400&fit=crop',
            badge: null, popular: true, rating: 4.8, orders: 980
        },
        {
            id: 7, name: 'Шашлык из курицы', category: 'kebab',
            desc: 'Маринованное куриное филе на углях с томатами и болгарским перцем.',
            price: 28000, weight: '250 г', time: '20 мин',
            img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 540
        },
        {
            id: 8, name: 'Кабоб танга', category: 'kebab',
            desc: 'Нежная телятина, маринованная в специях, на раскалённых углях. С луком и зеленью.',
            price: 45000, weight: '300 г', time: '30 мин',
            img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=400&fit=crop',
            badge: 'Новинка', badgeType: 'new', popular: false, rating: 4.7, orders: 210
        },

        // === СУПЫ ===
        {
            id: 9, name: 'Лагман', category: 'soup',
            desc: 'Густой суп с домашней лапшой, бараниной, овощами и ароматными специями.',
            price: 32000, weight: '450 мл', time: '25 мин',
            img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=400&fit=crop',
            badge: 'Хит', badgeType: 'hit', popular: true, rating: 4.9, orders: 1890
        },
        {
            id: 10, name: 'Шурпа', category: 'soup',
            desc: 'Наваристый бульон с крупными кусками баранины, картофелем, морковью и перцем.',
            price: 30000, weight: '450 мл', time: '20 мин',
            img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=400&fit=crop',
            badge: null, popular: true, rating: 4.8, orders: 1120
        },
        {
            id: 11, name: 'Мастава', category: 'soup',
            desc: 'Рисовый суп с мясом, овощами и зеленью. Подаётся с катыком и зеленью.',
            price: 28000, weight: '400 мл', time: '20 мин',
            img: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 430
        },
        {
            id: 12, name: 'Нарын', category: 'soup',
            desc: 'Холодное блюдо из тонко нарезанного теста с отварной кониной в бульоне.',
            price: 35000, weight: '350 г', time: '15 мин',
            img: 'https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 280
        },

        // === МАНТЫ ===
        {
            id: 13, name: 'Манты с бараниной', category: 'manti',
            desc: 'Большие паровые пельмени с сочной бараниной, луком и курдючным жиром.',
            price: 32000, weight: '4 шт / 320 г', time: '30 мин',
            img: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&h=400&fit=crop',
            badge: 'Хит', badgeType: 'hit', popular: true, rating: 4.8, orders: 1450
        },
        {
            id: 14, name: 'Манты с тыквой', category: 'manti',
            desc: 'Вегетарианские манты с тыквой и луком. Нежные и ароматные.',
            price: 24000, weight: '4 шт / 300 г', time: '30 мин',
            img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 310
        },
        {
            id: 15, name: 'Чучвара', category: 'manti',
            desc: 'Маленькие узбекские пельмени в ароматном бульоне с зеленью и катыком.',
            price: 28000, weight: '350 мл', time: '20 мин',
            img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.7, orders: 560
        },
        {
            id: 16, name: 'Ханум', category: 'manti',
            desc: 'Паровой рулет с мясным фаршем, луком и тыквой. Подаётся со сметаной.',
            price: 26000, weight: '300 г', time: '30 мин',
            img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 240
        },

        // === ВЫПЕЧКА ===
        {
            id: 17, name: 'Самса с мясом', category: 'pastry',
            desc: 'Треугольный пирожок из слоёного теста с сочной начинкой из баранины и лука.',
            price: 12000, weight: '150 г', time: '15 мин',
            img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&h=400&fit=crop',
            badge: 'Хит', badgeType: 'hit', popular: true, rating: 4.9, orders: 2100
        },
        {
            id: 18, name: 'Самса с тыквой', category: 'pastry',
            desc: 'Хрустящая самса со сладкой тыквой. Вегетарианская.',
            price: 10000, weight: '140 г', time: '15 мин',
            img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 670
        },
        {
            id: 19, name: 'Самса танурная', category: 'pastry',
            desc: 'Самса из тандыра с бараниной и курдючным жиром. Хрустящее тесто.',
            price: 14000, weight: '180 г', time: '15 мин',
            img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop',
            badge: 'Новинка', badgeType: 'new', popular: true, rating: 4.8, orders: 890
        },
        {
            id: 20, name: 'Гумма', category: 'pastry',
            desc: 'Жареные пирожки с мясным фаршем, обжаренные до золотистой корочки.',
            price: 10000, weight: '120 г', time: '10 мин',
            img: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.4, orders: 320
        },

        // === САЛАТЫ ===
        {
            id: 21, name: 'Ачичук', category: 'salad',
            desc: 'Свежий салат из помидоров, лука и острого перца. Идеален к плову.',
            price: 12000, weight: '200 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',
            badge: null, popular: true, rating: 4.7, orders: 1800
        },
        {
            id: 22, name: 'Шакароб', category: 'salad',
            desc: 'Помидорный салат с луком в собственном соку. Традиционная узбекская закуска.',
            price: 10000, weight: '200 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 640
        },
        {
            id: 23, name: 'Овощной салат', category: 'salad',
            desc: 'Микс из свежих огурцов, помидоров, редиса и зелени с оливковым маслом.',
            price: 14000, weight: '250 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 420
        },

        // === ЛЕПЁШКИ ===
        {
            id: 24, name: 'Нон оби', category: 'bread',
            desc: 'Традиционная узбекская лепёшка из тандыра. Мягкая, с хрустящей корочкой.',
            price: 5000, weight: '250 г', time: '10 мин',
            img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=400&fit=crop',
            badge: null, popular: true, rating: 4.8, orders: 2400
        },
        {
            id: 25, name: 'Нон патир', category: 'bread',
            desc: 'Слоёная лепёшка с маслом. Ароматная и рассыпчатая.',
            price: 7000, weight: '200 г', time: '10 мин',
            img: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.7, orders: 780
        },
        {
            id: 26, name: 'Катлама с луком', category: 'bread',
            desc: 'Жареная слоёная лепёшка с луком и зеленью. Хрустящая и сочная.',
            price: 10000, weight: '180 г', time: '15 мин',
            img: 'https://images.unsplash.com/photo-1586444248902-2367d1a2e9e1?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 380
        },

        // === ДЕСЕРТЫ ===
        {
            id: 27, name: 'Чак-чак', category: 'dessert',
            desc: 'Традиционная сладость из теста с мёдом. Хрустящая и тающая во рту.',
            price: 18000, weight: '200 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 340
        },
        {
            id: 28, name: 'Халва узбекская', category: 'dessert',
            desc: 'Домашняя халва из муки с сахаром и маслом. Рецепт из Самарканда.',
            price: 15000, weight: '200 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 260
        },
        {
            id: 29, name: 'Нават с орехами', category: 'dessert',
            desc: 'Кристаллический сахар с грецкими орехами. Подаётся к чаю.',
            price: 12000, weight: '150 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.4, orders: 190
        },
        {
            id: 30, name: 'Пахлава', category: 'dessert',
            desc: 'Слоёное тесто с орехами и медовым сиропом. Сладкая и хрустящая.',
            price: 16000, weight: '200 г', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1519676867240-f03562e64571?w=500&h=400&fit=crop',
            badge: 'Новинка', badgeType: 'new', popular: false, rating: 4.7, orders: 420
        },

        // === НАПИТКИ ===
        {
            id: 31, name: 'Чай зелёный (чайник)', category: 'drinks',
            desc: 'Узбекский зелёный чай кук-чой. Подаётся в чайнике с пиалами.',
            price: 8000, weight: '500 мл', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=400&fit=crop',
            badge: null, popular: true, rating: 4.7, orders: 2100
        },
        {
            id: 32, name: 'Компот домашний', category: 'drinks',
            desc: 'Освежающий компот из сухофруктов — курага, изюм, чернослив.',
            price: 8000, weight: '500 мл', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 780
        },
        {
            id: 33, name: 'Айран', category: 'drinks',
            desc: 'Кисломолочный напиток. Прохладный и освежающий. Идеален к мясным блюдам.',
            price: 7000, weight: '300 мл', time: '3 мин',
            img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 560
        },
        {
            id: 34, name: 'Чай чёрный (чайник)', category: 'drinks',
            desc: 'Крепкий чёрный чай кора-чой. Подаётся в чайнике с сахаром и лимоном.',
            price: 8000, weight: '500 мл', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.5, orders: 430
        },
        {
            id: 35, name: 'Морс облепиховый', category: 'drinks',
            desc: 'Домашний морс из свежей облепихи с мёдом. Витаминный и полезный.',
            price: 10000, weight: '400 мл', time: '5 мин',
            img: 'https://images.unsplash.com/photo-1563208723-e00e3c58f9d2?w=500&h=400&fit=crop',
            badge: null, popular: false, rating: 4.6, orders: 320
        }
    ];

    // ===== STATE =====
    let cart = [];
    let currentCategory = 'all';
    let currentSort = 'default';
    let searchQuery = '';

    // ===== DOM ELEMENTS =====
    const menuGrid = document.getElementById('menuGrid');
    const popularScroll = document.getElementById('popularScroll');
    const cartEl = document.getElementById('cart');
    const overlay = document.getElementById('overlay');
    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.getElementById('cartClose');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalEl = document.getElementById('cartTotal');
    const cartTotalPriceEl = document.getElementById('cartTotalPrice');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartCountEl = document.getElementById('cartCount');
    const orderModal = document.getElementById('orderModal');
    const orderForm = document.getElementById('orderForm');
    const orderBtn = document.getElementById('orderBtn');
    const modalClose = document.getElementById('modalClose');
    const modalSubtotalEl = document.getElementById('modalSubtotal');
    const modalTotalPriceEl = document.getElementById('modalTotalPrice');
    const successModal = document.getElementById('successModal');
    const successClose = document.getElementById('successClose');
    const orderNumberEl = document.getElementById('orderNumber');
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const searchInput = document.getElementById('searchInput');

    // ===== FORMAT PRICE =====
    function formatPrice(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' сум';
    }

    // ===== RENDER POPULAR =====
    function renderPopular() {
        const popular = menuItems.filter(i => i.popular).sort((a, b) => b.orders - a.orders);
        popularScroll.innerHTML = popular.map(item => `
            <div class="popular-card" data-id="${item.id}">
                <div class="popular-card__img">
                    <img src="${item.img}" alt="${item.name}" loading="lazy">
                </div>
                <div class="popular-card__body">
                    <div class="popular-card__name">${item.name}</div>
                    <div class="popular-card__price">${formatPrice(item.price)}</div>
                </div>
            </div>
        `).join('');

        popularScroll.querySelectorAll('.popular-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                addToCart(id);
            });
        });
    }

    // ===== RENDER MENU =====
    function renderMenu() {
        let items = [...menuItems];

        if (currentCategory !== 'all') {
            items = items.filter(i => i.category === currentCategory);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            items = items.filter(i =>
                i.name.toLowerCase().includes(q) ||
                i.desc.toLowerCase().includes(q)
            );
        }

        switch (currentSort) {
            case 'price-asc': items.sort((a, b) => a.price - b.price); break;
            case 'price-desc': items.sort((a, b) => b.price - a.price); break;
            case 'popular': items.sort((a, b) => b.orders - a.orders); break;
        }

        menuGrid.innerHTML = items.map(item => {
            const inCart = cart.find(c => c.id === item.id);
            const badgeHtml = item.badge
                ? `<span class="food-card__badge ${item.badgeType === 'new' ? 'food-card__badge--new' : item.badgeType === 'hit' ? 'food-card__badge--hit' : ''}">${item.badge}</span>`
                : '';

            const btnHtml = inCart
                ? `<div class="food-card__qty">
                       <button class="food-card__qty-btn" data-action="minus" data-id="${item.id}">−</button>
                       <span class="food-card__qty-num">${inCart.qty}</span>
                       <button class="food-card__qty-btn" data-action="plus" data-id="${item.id}">+</button>
                   </div>`
                : `<button class="food-card__add" data-id="${item.id}">+</button>`;

            return `
                <div class="food-card" data-id="${item.id}">
                    <div class="food-card__img">
                        ${badgeHtml}
                        <span class="food-card__time">${item.time}</span>
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="food-card__body">
                        <div class="food-card__name">${item.name}</div>
                        <div class="food-card__desc">${item.desc}</div>
                        <div class="food-card__weight">${item.weight}</div>
                        <div class="food-card__bottom">
                            <span class="food-card__price">${formatPrice(item.price)}</span>
                            ${btnHtml}
                        </div>
                    </div>
                </div>`;
        }).join('');

        // Event listeners
        menuGrid.querySelectorAll('.food-card__add').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(parseInt(btn.dataset.id));
            });
        });

        menuGrid.querySelectorAll('.food-card__qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                if (btn.dataset.action === 'plus') addToCart(id);
                else removeFromCart(id);
            });
        });
    }

    // ===== CART FUNCTIONS =====
    function addToCart(id) {
        const existing = cart.find(c => c.id === id);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ id, qty: 1 });
        }
        updateCart();
        renderMenu();
    }

    function removeFromCart(id) {
        const idx = cart.findIndex(c => c.id === id);
        if (idx === -1) return;
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        updateCart();
        renderMenu();
    }

    function getCartTotal() {
        return cart.reduce((sum, c) => {
            const item = menuItems.find(i => i.id === c.id);
            return sum + (item ? item.price * c.qty : 0);
        }, 0);
    }

    function getCartCount() {
        return cart.reduce((sum, c) => sum + c.qty, 0);
    }

    function updateCart() {
        const total = getCartTotal();
        const count = getCartCount();

        // Header button
        cartTotalEl.textContent = total > 0 ? formatPrice(total).replace(' сум', '') : '0';
        cartCountEl.textContent = count;
        cartCountEl.style.display = count > 0 ? 'flex' : 'none';

        // Cart sidebar
        const hasItems = cart.length > 0;
        cartEmpty.style.display = hasItems ? 'none' : 'block';
        cartFooter.style.display = hasItems ? 'block' : 'none';

        if (hasItems) {
            cartItems.innerHTML = cart.map(c => {
                const item = menuItems.find(i => i.id === c.id);
                if (!item) return '';
                return `
                    <div class="cart-item">
                        <div class="cart-item__img">
                            <img src="${item.img}" alt="${item.name}">
                        </div>
                        <div class="cart-item__info">
                            <div class="cart-item__name">${item.name}</div>
                            <div class="cart-item__price">${formatPrice(item.price * c.qty)}</div>
                        </div>
                        <div class="cart-item__controls">
                            <button class="cart-item__btn" data-action="minus" data-id="${c.id}">−</button>
                            <span class="cart-item__qty">${c.qty}</span>
                            <button class="cart-item__btn" data-action="plus" data-id="${c.id}">+</button>
                        </div>
                    </div>`;
            }).join('');

            cartSubtotalEl.textContent = formatPrice(total);
            cartTotalPriceEl.textContent = formatPrice(total);

            // Cart item controls
            cartItems.querySelectorAll('.cart-item__btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.dataset.id);
                    if (btn.dataset.action === 'plus') addToCart(id);
                    else removeFromCart(id);
                });
            });
        } else {
            cartItems.innerHTML = '';
        }
    }

    // ===== CART OPEN/CLOSE =====
    function openCart() {
        cartEl.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        cartEl.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    // ===== ORDER MODAL =====
    orderBtn.addEventListener('click', () => {
        closeCart();
        const total = getCartTotal();
        modalSubtotalEl.textContent = formatPrice(total);
        modalTotalPriceEl.textContent = formatPrice(total);
        orderModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', () => {
        orderModal.classList.remove('open');
        document.body.style.overflow = '';
    });

    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        orderModal.classList.remove('open');

        // Generate order number
        orderNumberEl.textContent = '#' + (1000 + Math.floor(Math.random() * 9000));

        successModal.classList.add('open');

        // Clear cart
        cart = [];
        updateCart();
        renderMenu();
    });

    successClose.addEventListener('click', () => {
        successModal.classList.remove('open');
        document.body.style.overflow = '';
    });

    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // ===== CATEGORY TABS =====
    document.querySelectorAll('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.dataset.category;
            renderMenu();

            // Scroll to menu
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ===== SORT FILTERS =====
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.dataset.sort;
            renderMenu();
        });
    });

    // ===== SEARCH =====
    if (searchInput) {
        let debounce;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounce);
            debounce = setTimeout(() => {
                searchQuery = searchInput.value.trim();
                renderMenu();
            }, 300);
        });
    }

    // ===== MOBILE NAV =====
    burger.addEventListener('click', () => {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    mobileNavClose.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ===== HEADER SCROLL =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        header.style.transition = 'transform .3s ease';
        lastScroll = currentScroll;
    });

    // ===== INIT =====
    renderPopular();
    renderMenu();
    updateCart();
});
