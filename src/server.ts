/** 
 * @name server.ts Serveur HTTP
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @version 1.0.0
*/
import app from "./app";

const _PORT = 3000;

app.listen(_PORT, () => {
    console.log('Serveur Express à l\'écoute sur le port : ' + _PORT);
})