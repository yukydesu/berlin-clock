GROUPE 44 :
KYLLIAN DELBAUCHE
SEBASTIAN SILVESTREAN
SOHIB ELHEMDI

Berlin Clock Kata - TDD

Le Berlin Clock Kata est un exercice de programmation orienté TDD (développement dirigé par les tests) conçu pour
convertir une heure numérique (format HH:MM:SS) en une représentation visuelle spécifique, inspirée de l'horloge de Berlin.

Fonctionnement du programme
Le programme affiche l'heure en utilisant une série de lampes disposées comme suit :

- Lampe des secondes : s'allume pour les secondes paires, s'éteint pour les secondes impaires.
- Heures : deux lignes de lampes rouges ; la première ligne indique les heures par blocs de 5, la seconde les heures unitaires.
- Minutes : deux lignes de lampes ; la première indique les minutes par blocs de 5 (avec une lampe rouge toutes les 3 lampes, sinon jaune)
  et la seconde les minutes unitaires (jaunes).

Objectif pédagogique
Cet exercice est idéal pour pratiquer le TDD et le pair programming, des méthodes très utilisées en développement logiciel.

Installation
------------

1. Clonez le dépôt :
    ```sh
    git clone <URL_DU_DEPOT>
    ```

2. Accédez au répertoire du projet :
    ```sh
    cd berlin-clock
    ```

3. Installez les dépendances :
    ```sh
    npm install
    ```

4. Installez Jasmine globalement (si ce n'est pas déjà fait) :
    ```sh
    npm install jasmine
    ```

5. Exécutez les tests pour vérifier que tout fonctionne correctement :
    ```sh
    npm test
    ```


