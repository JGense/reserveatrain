const fetch = require('node-fetch');

export async function searchSncf(query) {
    let reponseApiSncf = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`).catch((error) => console.log(error));
    let jsonReponseSncf = await reponseApiSncf.json().catch((error) => {console.log(error)});
    return jsonReponseSncf.records.map(function(gare) {
        //console.dir(gare);
        return {id: gare.recordid, libelle: gare.fields.gare_alias_libelle_noncontraint};
    });
}
