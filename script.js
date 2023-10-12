console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

const cardData = [
  {
    fecha: "1936",
    nombre: "ENIAC",
    descripcion: "La primera computadora electrónica de propósito general."
  },
  {
    fecha: "1951",
    nombre: "UNIVAC I",
    descripcion: "La primera computadora comercialmente exitosa."
  },
  {
    fecha: "1964",
    nombre: "IBM System/360",
    descripcion: "Estableció la idea de una arquitectura de computadora compatible."
  },
  {
    fecha: "1969",
    nombre: "ARPANET",
    descripcion: "La precursora de Internet, conectando computadoras remotas."
  },
  {
    fecha: "1977",
    nombre: "Apple II",
    descripcion: "Popularizó las computadoras personales."
  },
  {
    fecha: "1981",
    nombre: "IBM PC",
    descripcion: "Estableció el estándar para las PC compatibles."
  },
  {
    fecha: "1985",
    nombre: "Windows 1.0",
    descripcion: "El primer sistema operativo gráfico de Microsoft."
  },
  {
    fecha: "1991",
    nombre: "World Wide Web",
    descripcion: "Inventado por Tim Berners-Lee, revolucionó la forma en que accedemos a la información."
  },
  {
    fecha: "1993",
    nombre: "Pentium",
    descripcion: "La serie de procesadores de Intel que dominó la década de 1990."
  }, {
    fecha: "2007",
    nombre: "¡Phone",
    descripcion: "Introdujo los smartphones modernos y la era de las aplicaciones móviles."
  }
];

let currentCardIndex = 0;

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	let newIndex;
	if (direction === "right") {
	  newIndex = (currentCardIndex + 1) % cardData.length;
	} else if (direction === "left") {
	  newIndex = (currentCardIndex - 1 + cardData.length) % cardData.length;
	}
	
	currentCardIndex = newIndex; 
	console.log(currentCardIndex)
	// Actualiza el índice antes de actualizar la información
  
	updateCardInfo();
	updateBackground();
	swapCardsClass();
  }
  

  
  function updateBackground() {
	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");
	
	const currentIndex = currentCardIndex;
	const previousIndex = (currentIndex - 1 + cardData.length) % cardData.length;
	const nextIndex = (currentIndex + 1) % cardData.length;
  
	// Actualiza las imágenes de fondo en función de los índices
	currentBgImageEl.querySelector("img").src = `background${currentIndex}.jpg`;
	previousBgImageEl.querySelector("img").src = `background${previousIndex}.jpg`;
	nextBgImageEl.querySelector("img").src = `background${nextIndex}.jpg`;
	
  }
  
  
  function updateCardInfo() {
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	currentInfoEl.querySelector(".date").textContent = cardData[currentCardIndex].fecha;
	currentInfoEl.querySelector(".name").textContent = cardData[currentCardIndex].nombre;
	currentInfoEl.querySelector(".description").textContent = cardData[currentCardIndex].descripcion;
  
	// Aquí, puedes cargar la imagen de fondo correspondiente a la descripción
	appBgContainerEl.querySelector(".current--image img").src = `background${currentCardIndex}.jpg`;
appBgContainerEl.querySelector(".previous--image img").src = `background${(currentCardIndex - 1 + cardData.length) % cardData.length}.jpg`;
appBgContainerEl.querySelector(".next--image img").src = `background${(currentCardIndex + 1) % cardData.length}.jpg`;
currentCardBg.querySelector("img").src = `background${currentCardIndex}.jpg`;
  }
  
  

function swapCardsClass() {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  const previousCardEl = cardsContainerEl.querySelector(".previous--card");
  const nextCardEl = cardsContainerEl.querySelector(".next--card");

  const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
  const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
  const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

  currentCardEl.classList.remove("current--card");
  previousCardEl.classList.remove("previous--card");
  nextCardEl.classList.remove("next--card");

  currentBgImageEl.classList.remove("current--image");
  previousBgImageEl.classList.remove("previous--image");
  nextBgImageEl.classList.remove("next--image");

  currentCardEl.style.zIndex = "50";
  currentBgImageEl.style.zIndex = "-2";

  previousCardEl.style.zIndex = "20";
  nextCardEl.style.zIndex = "30";

  nextBgImageEl.style.zIndex = "-1";

  currentCardEl.classList.add("previous--card");
  previousCardEl.classList.add("next--card");
  nextCardEl.classList.add("current--card");

  currentBgImageEl.classList.add("previous--image");
  previousBgImageEl.classList.add("next--image");
  nextBgImageEl.classList.add("current--image");
}

function init() {
  updateCardInfo();

  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    delay: 0.15,
    duration: 0.5,
    stagger: {
      ease: "power4.inOut",
      from: "right",
      amount: 0.1,
    },
    "--card-translateY-offset": "0%",
  })
    .to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
      delay: 0.5,
      duration: 0.4,
      stagger: 0.1,
      opacity: 1,
      translateY: 0,
    })
    .to(
      [buttons.prev, buttons.next],
      {
        duration: 0.4,
        opacity: 1,
        pointerEvents: "all",
      },
      "-=0.4"
    );
}

const waitForImages = () => {
  const images = [...document.querySelectorAll("img")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");

  gsap.set(cardsContainerEl.children, {
    "--card-translateY-offset": "100vh",
  });
  gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
    translateY: "40px",
    opacity: 0,
  });
  gsap.set([buttons.prev, buttons.next], {
    pointerEvents: "none",
    opacity: "0",
  });

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;

        gsap.to(loaderEl, {
          duration: 1,
          scaleX: loadProgress,
          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
        });

        if (totalImages == loadedImages) {
          gsap.timeline()
            .to(".loading__wrapper", {
              duration: 0.8,
              opacity: 0,
              pointerEvents: "none",
            })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();
