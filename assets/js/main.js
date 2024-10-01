const textEffect = document.querySelector('.text-effect');

        function restartAnimation() {

            textEffect.classList.remove('text-effect');

            void textEffect.offsetWidth; 


            textEffect.classList.add('text-effect');
        }

        setInterval(restartAnimation, 5000);