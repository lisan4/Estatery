window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    class MenuCard {
        constructor(img, price, info, desc, beds, bathrooms, s, parentSelector, ...classes) { //создаем конструктор карточек и передаем аргументы + рест оператор
            this.img = img;
            this.price = price;
            this.info = info;
            this.desc = desc;
            this.beds = beds;
            this.bathrooms = bathrooms;
            this.s = s;
            this.classes = classes; //рест оператор
            this.parent = document.querySelector(parentSelector); //ищем родителя наших карточек, чтобы туда вставить потом карточки
        }

        render() { //создаем создание карточки
            const element = document.createElement("div"); //создам элемент див, чтобы потом запушить его в родителя

            if (this.classes.length === 0) { //если в рест оператор не прописан класс, то ставится дефолт
                this.element = "home"
                element.style.backgroundImage = `${this.img}`;
                element.classList.add(this.element); //дефолт класс
            } else {
                this.classes.forEach(className => { //добавляем класс из рест оператора
                    element.classList.add(className);
                });
            }

     

            element.innerHTML = ` 

                <ul class="home-list">
                    <li class="home-item">
                        <p class="home-cout">${this.price}<span class="cout-grey"> /month</span></p>
                    </li>
                    <li class="home-item">
                        <p class="home-title">${this.info}</p>
                    </li>
                    <li class="home-item">
                        <p class="home-desc">${this.desc}</p>
                    </li>
                </ul>

                <div class="conditions">
                    <ul class="conditions-list">
                        <li class="conditions-item">
                            <img src="/img/Bed.svg">
                            <p class="conditions-text">${this.beds} Beds</p>
                        </li>
                        <li class="conditions-item">
                            <img src="/img/Bath.svg">

                            <p class="conditions-text">${this.bathrooms} Bathrooms</p>
                        </li>
                        <li class="conditions-item">
                            <img src="/img/square.svg">
                            
                            <p class="conditions-text">${this.s} m²</p>
                        </li>
                    </ul>
                </div>

            

            `;

            
            this.parent.append(element); //аппендим в родителя карточку
            
        }
    }

    new MenuCard("url('/img/1bg.card.png')", "$2,095", "Palm Harbor", "2699 Green Valley, Highland Lake, FL", "3", "2", "5x7", ".home-wrapper").render();
    new MenuCard("url('/img/bg2-card.png')", "$2,700", "Beverly Springfield", "2821 Lake Sevilla, Palm Harbor, TX", "4", "2", "6x7,5", ".home-wrapper").render();
    new MenuCard("url('/img/bg3-card.png')", "$4,550", "Faulkner Ave", "909 Woodland St, Michigan, IN", "4", "3", "8x10", ".home-wrapper").render();


});
