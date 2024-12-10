--Q1 
--Arzon[mois] = 
SELECT DISTINCT mois FROM Arzon;
-- Baden[jour, mois] =
SELECT DISTINCT jour, mois FROM Baden;
-- Arzon[numero ∗ numero, mois] =
SELECT DISTINCT numero*numero, mois FROM Arzon;

--Q2
--a) Arzon{numero > 1}
SELECT DISTINCT* FROM Arzon WHERE numero > 1;
--b) Arzon{numero > 0 ET activite =′ velo ′}
SELECT DISTINCT * FROM Arzon WHERE numero > 0 AND activite = 'velo';
--c) Arzon{numero > 1 OU numero < 0}
SELECT DISTINCT * FROM Arzon WHERE numero > 1 OR numero < 0;
--d) Arzon{numero > 1}{numero < 0}
SELECT DISTINCT * FROM Arzon WHERE numero > 1 AND numero < 0;
--e) Arzon{(numero > 1 OU numero < 0) ET mois ! = ′novembre′}
SELECT DISTINCT * FROM Arzon WHERE (numero > 1 OR numero < 0) AND mois != 'novembre';

--Q3
--Arzon{numero > 1}[mois, activite]
SELECT DISTINCT mois, activite FROM Arzon WHERE numero > 1;
--Arzon{mois < ′m ′}[numero]
SELECT DISTINCT numero FROM Arzon WHERE mois < 'm';
--Arzon[numero]{mois > ′f′} 
SELECT DISTINCT * FROM( SELECT numero FROM Arzon) WHERE mois > 'f';
--Arzon[numero,mois]{mois > ′f′}
SELECT DISTINCT numero, mois FROM Arzon WHERE mois > 'f';

--Q4 (union, donc pas besoin de mettre distinct car union le fait déjà)
--Arzon[activite] ∪ Baden[activite]
SELECT activite FROM Arzon UNION SELECT activite FROM Baden;
--Arzon[mois] ∩ Baden[mois]
SELECT mois FROM Arzon INTERSECT SELECT mois FROM Baden;
--(Arzon[mois] ∩ Baden[mois])[activite]
SELECT activite FROM (SELECT mois FROM Arzon INTERSECT SELECT mois FROM Baden);
--(Arzon[mois, activite] ∩ Baden[mois, activite])[activite]
SELECT activite FROM ( SELECT mois, activite FROM Arzon INTERSECT SELECT mois, activite FROM Baden);
--Arzon{numero < 0}[mois, activite] r Baden[mois, activite]
SELECT mois, activite FROM Arzon WHERE numero < 0 UNION SELECT mois, activite FROM Baden;

--Q5 
SELECT * FROM EnseignantInfo;
SELECT * FROM EtudiantInfo;
--Q6 
-- EtudiantInfo[prenom]
SELECT prenom FROM EtudiantInfo;
SELECT UPPER(prenom) FROM EtudiantInfo;
/*
SANS UPPPER
PRENOM
Nathan
Amélie
Cyprien
Polig
Melvyn

AVEC UPPER
UPPER(PRENOM)
NATHAN
AMÉLIE
CYPRIEN
POLIG
MELVYN
*/

--Q7 
-- EtudiantInfo{prenom = 'Louis'}
SELECT * FROM EtudiantInfo WHERE UPPER(prenom) = 'LOUIS';
/*
NOETU	NOMETU	PRENOM	GROUPE
10	BILLARD	Louis	B
45	HAMON	Louis	C
*/

--Q8 Quels sont les  ́etudiants pr ́enomm ́es ‘Victor’ ou ‘Paul’ ?
-- EtudiantInfo{prenom = 'Victor' OU prenom = 'Paul'}
SELECT * FROM EtudiantInfo WHERE UPPER(prenom) = 'VICTOR' OR UPPER(prenom) = 'PAUL';
/*
NOETU	NOMETU	PRENOM	GROUPE
24	DESBROUSSES	Victor	A
36	GAUFFENY	PAuL	A
89	ROUSSEL	Paul	C
101	VRIGNAUD	pAul	B
*/

--Q9 
-- EtudiantInfo{prenom = 'Ewan' ET groupe != 'C'}
SELECT * FROM EtudiantInfo WHERE UPPER(prenom) = 'EWAN' AND groupe != 'C';
/* Il n'y en a aucun :
no data found
*/

--Q10 
-- EtudiantInfo[nomEtu]∪EnseignantInfo[nomEns]
SELECT UPPER(nomEtu) AS nom FROM EtudiantInfo UNION SELECT UPPER(nomEns) AS nom FROM EnseignantInfo;

--Q11 
-- EtudiantInfo[prenom]∩EnseignantInfo[prenomEns]
SELECT UPPER(prenom) AS prenom FROM EtudiantInfo INTERSECT SELECT UPPER(prenomEns) AS prenom FROM EnseignantInfo;
/*
PRENOM
FRANCOIS
THIBAULT
*/

--Q12 
-- EnseignantInfo[prenomEns]−EtudiantInfo[prenom]
SELECT UPPER(prenomEns) AS prenom FROM EnseignantInfo MINUS SELECT UPPER(prenom) AS prenom FROM EtudiantInfo;
/*
PRENOM
ABDELBADIE
ELODIE
GOULVEN
HELENE
ISABELLE
*/

--Q13
--
SELECT UPPER(prenomEns) AS prenom FROM EnseignantInfo ORDER BY prenom DESC;
/*
PRENOM
XAVIER
THIBAULT
SOPHIE
SEBASTIEN
REGIS
*/

--Q14
-- EtudiantInfo{nomEtu commence par 'A' ET nomEtu contient 'A'}[nomEtu, prenom]
SELECT DISTINCT nomEtu, prenom FROM EtudiantInfo WHERE UPPER(nomEtu) LIKE 'A%A%';
/*
NOMETU	PRENOM
ALEXANDRE	Nathan
ARANDEL	Cyprien
*/

--Q15
-- EtudiantInfo{nomEtu < prenom ET nomEtu contient 'A'}[noEtu, nomEtu]
SELECT DISTINCT noEtu, nomEtu FROM EtudiantInfo WHERE UPPER(nomEtu) LIKE '%A' ORDER BY nomEtu, prenom;

--Q16 

SELECT * FROM (SELECT UPPER(nomEtu) FROM EtudiantInfo ORDER BY UPPER(nomEtu)) WHERE ROWNUM <= 10;

/*
UPPER(NOMETU)
ALEXANDRE
ANNEIX
ARANDEL
BARATHON
BARIOU
BELMOKHTAR
BELOUAHRANI KEBIR HOCEINI
BELTRAME
BERNARD-GRIFFITHS
BILLARD
*/
