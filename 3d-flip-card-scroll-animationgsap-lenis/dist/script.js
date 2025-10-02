document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);

	const lenis = new Lenis();
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	const mesajes = {
		ms1: {
			title: 'Análisis',
			info: 'Identificamos las necesidades del cliente y definimos los objetivos del proyecto mediante entrevistas y investigación de mercado.'
		},
		ms2: {
			title: 'Diseño',
			info: 'Creamos wireframes, prototipos y mockups que reflejan la visión del producto con un enfoque centrado en el usuario.'
		},
		ms3: {
			title: 'Desarrollo',
			info: 'Implementamos la solución usando las mejores prácticas de código, metodologías ágiles y tecnologías modernas.'
		},
		ms4: {
			title: 'Entrega',
			info: 'Realizamos pruebas exhaustivas, optimizamos el rendimiento y lanzamos el producto al mercado con soporte continuo.'
		},
	}

	const mensajes = Object.values(mesajes);
	const totalNumbers = document.querySelectorAll('.total-number');
	totalNumbers.forEach(totalNumber => {
		totalNumber.textContent = mensajes.length;
	});

	function actualizarContenidoCarta(mensajeAdelante, mensajeAtras, numeroPaso) {
		const frontTitle = document.querySelector('.front .title');
		const frontInfo = document.querySelector('.front .info');
		const backTitle = document.querySelector('.back .title');
		const backInfo = document.querySelector('.back .info');
		const countNumbers = document.querySelectorAll('.count-number');

		if (frontTitle && frontInfo && backTitle && backInfo) {
			frontTitle.textContent = mensajeAdelante.title;
			frontInfo.textContent = mensajeAdelante.info;

			if (mensajeAtras) {
				backTitle.textContent = mensajeAtras.title;
				backInfo.textContent = mensajeAtras.info;
			} else {
				backTitle.textContent = '';
				backInfo.textContent = '';
			}

			countNumbers.forEach(countNumber => {
				countNumber.textContent = numeroPaso;
			});
		}
	}

	gsap.to('.section2', {
		scrollTrigger: {
			trigger: '.section2',
			start: 'top top',
			end: `+=${window.innerHeight * 5}px`,
			pin: true,
			scrub: true,
			toggleActions: "play none none play",
			onUpdate: (self) => {
				const progreso = self.progress;
				const indiceMensajeActual = Math.floor(progreso * mensajes.length);
				const progresoDentroDelMensaje = (progreso * mensajes.length) - indiceMensajeActual;

				const parActual = Math.floor(indiceMensajeActual / 2);
				const indiceFront = parActual * 2;
				const indiceBack = parActual * 2 + 1;
				const esUltimoPar = indiceFront >= mensajes.length;

				const esUltimoMensaje = indiceMensajeActual >= mensajes.length;
				const conicValue = esUltimoMensaje ? 100 : progresoDentroDelMensaje * 100;

				const maxRotacion = Math.min(indiceMensajeActual, mensajes.length - 1) * 180;

				let mensajeAdelante, mensajeAtras;

				if (esUltimoPar) {
					const ultimoIndice = mensajes.length;
					mensajeAdelante = mensajes[ultimoIndice];
					mensajeAtras = undefined;
				} else {
					mensajeAdelante = mensajes[indiceFront];
					mensajeAtras = mensajes[indiceBack];
				}

				document.querySelector('.background').style.setProperty('--conic-t', `${conicValue}%`);
				document.querySelector('.background').style.setProperty('--conic-b', `${conicValue}%`);
				document.querySelector('.card').style.setProperty('--rotate-y', `-${maxRotacion}deg`);

				setTimeout(() => {
					actualizarContenidoCarta(mensajeAdelante, mensajeAtras, indiceMensajeActual + 1);
				}, 300);
			}
		}
	});
});