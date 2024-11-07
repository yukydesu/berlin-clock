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

Instructions d'installation et étapes de développement
1. Préparation de l’environnement
   - Assurez-vous d'avoir Git installé sur votre machine.
   - Téléchargez et installez Node.js (qui inclut NPM) depuis le site officiel : https://nodejs.org/fr
   - Vérifiez l'installation en tapant la commande suivante dans votre terminal :
     ```bash
     npm -v
     ```

2. Etapes de l'exercice
   Le développement de l'horloge suit plusieurs étapes en TDD :
   - Etape 1 : Implémenter la ligne des minutes unitaires (4 lampes jaunes).
   - Etape 2 : Implémenter la ligne des blocs de 5 minutes (11 lampes, chaque 3ème est rouge).
   - Etape 3 : Implémenter la ligne des heures unitaires (4 lampes rouges).
   - Etape 4 : Implémenter la ligne des blocs de 5 heures (4 lampes rouges).
   - Etape 5 : Implémenter la lampe des secondes (on pour secondes paires, off pour impaires).
   - Etape 6 : Intégrer l’horloge complète pour obtenir la représentation finale.

3. Développement en Pair Programming et TDD
   Cet exercice est conçu pour être réalisé en pair programming. En travaillant en binôme, vous alternerez entre les 
   rôles de Pilote (celui qui code) et de Co-Pilote (celui qui guide et vérifie le code). Adoptez une approche TDD 
   pour chaque étape : 
   - Écrivez un test pour la fonctionnalité souhaitée.
   - Codez uniquement ce qu'il faut pour faire passer le test.
   - Effectuez des refactorisations si nécessaire.

Chaque étape doit être validée par un test avant de passer à l'étape suivante.

Bonne chance et amusez-vous bien avec ce kata de l'horloge de Berlin !
