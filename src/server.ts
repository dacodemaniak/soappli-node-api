/** 
 * @name server.ts Serveur HTTP
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @version 1.0.0
*/
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})