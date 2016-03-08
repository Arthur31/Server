String [][] Noms = 
{
  {
    "Alice", "Bob", "Etienne", "Hector", "Hugo", "Léa", "Nathan", "Paul", "Pierre", "Zoé", "Alice", "Bob", "Etienne", "Hector", "Hugo", "Léa", "Nathan", "Paul", "Pierre", "Zoé"
  }
  , 
  {
    "Dupont", "Dupont", "Dupont", "Dupont", "Dupont", "Dupont", "Dupont", "Dupont", "Dupont", "Dupont", "Dupond", "Dupond", "Dupond", "Dupond", "Dupond", "Dupond", "Dupond", "Dupond", "Dupond", "Dupond",
  }
};
String [] Numeros =
{
  "0606060601", "0606060602", "0606060603", "0606060604", "0606060605", "0606060606", "0606060607", "0606060608", "0606060609", "0606060610", "0706060601", "0706060602", "0706060603", "0706060604", "0706060605", "0706060606", "0706060607", "0706060608", "0706060609", "0706060610"
};
String PrenomRech = "Alice";
String NomRech = "Dupont";

boolean trouve=false;
//Pour le moment pas fonctionnel, affiche deux fois le prénom ou deux fois le nom, doit être modifié pour tenir compte des différences entre noms identiques mais prénoms différents et vice-versa
for (int indice=0; indice<Noms[0].length; indice++)
{
    
     if (Noms[0][indice].equals(PrenomRech)&&Noms[1][indice].equals(NomRech)&&trouve!=true)
    {
      trouve=true;
      println("Prénom : "+Noms[0][indice]+ ", Nom : " +Noms[1][indice]+ ", Numéro de téléphone : "+Numeros[indice]);
    }
    if (!Noms[0][indice].equals(PrenomRech)&&Noms[1][indice].equals(NomRech)&&trouve!=true)
    {
      trouve=true;
      println("Nom uniquement trouvé, pas de numéro de téléphone associé : "+Noms[1][indice]);
    }
    if (Noms[0][indice].equals(PrenomRech)&&!Noms[1][indice].equals(NomRech)&&trouve!=true)
    {
      trouve=true;
      println("Prénom uniquement trouvé, pas de numéro de téléphone associé : "+Noms[0][indice]);
    }
  }
if (trouve==false)
{
  println("Nom et prénom inconnus, pas de numéro de téléphone associé.");
}

