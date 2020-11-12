import { db } from "lib/firebase";


export default async (req, res) => {
    try {
        const { name } = req.body;
        console.log(req.body)


        const ref = db.collection("usuarios");
        let id;
        const responseKey = await ref
            .add({
                nombre: name,
            })
            .then(function (docRef) {
                id = docRef.id;
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });



        //Devuelvo el usuario recien creado. Aca se termina lo que vos pediste
        res.status(200).json({
            status: "added",
            id,
            name,
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message,
        });
    }
};