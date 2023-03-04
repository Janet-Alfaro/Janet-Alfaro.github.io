let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#B16A9A;">Desarrollo sitios web y actualmente soy una estudiante de Ingenieria en Desarrollo y Gestion de Software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
