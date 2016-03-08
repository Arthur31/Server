// Variable Globale Taille Tableau

int TailleTableau = 10;
 
// programme principal


void setup() {
  // Déclaration du tableau

  int[] tab = new int[TailleTableau];
  // Initialisation du tableau
	
  initialiseTableauAuHasard(tab);
  // Affichage du tableau
 
	  println("tableau non trié");
  println(tab);
}



void initialiseTableauAuHasard(int[] T) {
  
	for (int i =0; i < TailleTableau; i ++) {
 
	   T[i] = int(random(1, TailleTableau*2));
  }
}





	void triSelection(int[] T) {
  

	int i=0;
  int j=0;
  for ( i=0 ; i < TailleTableau ; i++) {
  
	int IndexPlusPetit=i; 
    
for ( j=0 ; j < TailleTableau ; j++) {
  
    if (T[j]<T[i]) {
        IndexPlusPetit=j;
      }
    }


    int swap;
    swap = T[i] ;
    T[i] = T[j] ;
    T[j] = swap ;
  }
}