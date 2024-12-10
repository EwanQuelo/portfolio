import "./menuProjet.css";
import React from "react";
import { Link } from "react-router-dom";


export const projects = [
    {
        id: 1, color: "#3abbcf" , enCours: "en cours", title: "Portfolio", date: "2024", description: "Site sur lequel vous naviguez", descDetaille: "Blabla le projet façon détaillé Blabla le projet façon détaillé Blabla le projet façon détaillé Blabla le projet façon détaillé ", githubUrl: "https://github.com/ewanquelo", projectUrl: "ewanquelo.com", gallery: [
            "https://private-user-images.githubusercontent.com/156847481/393819971-3ba7f93f-d3d0-46b3-a1f8-47029b703327.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NzcwMTcsIm5iZiI6MTczMzc3NjcxNywicGF0aCI6Ii8xNTY4NDc0ODEvMzkzODE5OTcxLTNiYTdmOTNmLWQzZDAtNDZiMy1hMWY4LTQ3MDI5YjcwMzMyNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOVQyMDM4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YzhjYTc1ODRmZjUyYmFiODM1Mjc0ZGUwODJjN2I4OTllOGNiZWRmNjNmODBmYzY0MmU5OTFmNDE5OTk3MmZhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ci-XcpBOv-WaGKMwMd90AgnQlxVz4XJ6snNIlPdXDoU",
            "https://private-user-images.githubusercontent.com/156847481/393820028-3c4f44fc-276f-43d5-a134-f826f51690e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NzcwMTcsIm5iZiI6MTczMzc3NjcxNywicGF0aCI6Ii8xNTY4NDc0ODEvMzkzODIwMDI4LTNjNGY0NGZjLTI3NmYtNDNkNS1hMTM0LWY4MjZmNTE2OTBlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOVQyMDM4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hOTE3NzNiYTIyN2ViYjQyNDIwOTQ2NzYwMmEwYzhhNTY5ZGEwMzQzYjU5NjdmZWM4MzVmZjUyZDFiYzZjNTM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ih8u4CxwJ6eLjIup0u9i0yBnN6jU8NyLXKdHrJEW3Mc",
            "https://private-user-images.githubusercontent.com/156847481/393820059-5e99f2df-28f4-4836-81a2-0cd07f8d89e0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NzcwMTcsIm5iZiI6MTczMzc3NjcxNywicGF0aCI6Ii8xNTY4NDc0ODEvMzkzODIwMDU5LTVlOTlmMmRmLTI4ZjQtNDgzNi04MWEyLTBjZDA3ZjhkODllMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOVQyMDM4MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzZiNjRkZGMwMzI2NTJjM2M4MTE2MzU2MGYwZjdjMzViY2Y2OTliNTkwMWNkZDU5Yzg0YjU3ZGJiNTFmMWE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9hWwjSriJKNS8I-G28buazu-LapTT2-4bCEPCHEq7UA",

        ]
    },
    {
        id: 2, enCours: "en cours", title: "FLUX AI", date: "2024", description: "Chat utilisant l'api gemini", descDetaille: "Blabla le projet façon détaillé", githubUrl: "https://github.com/ewanquelo", projectUrl: "https://3d-tools.com", gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s"
        ],
    },
    { id: 3, title: "3D Tools", date: "2024", description: "Cube 3d d'outils", descDetaille: "Blabla le projet façon détaillé", projectUrl: "https://3d-tools.com" },
    {
        id: 4, title: "Good or Not", date: "2024", description: "Jeu pour vision os", descDetaille: "Jeu de reflex fait en SwiftUI pour visionOS ou il suffit de selectionné les bonnes couleurs pour gagner des points", gallery: [
            "https://private-user-images.githubusercontent.com/156847481/339903651-077c6595-5b24-4ba7-b209-adf49f74d8f5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM2NTA5MDcsIm5iZiI6MTczMzY1MDYwNywicGF0aCI6Ii8xNTY4NDc0ODEvMzM5OTAzNjUxLTA3N2M2NTk1LTViMjQtNGJhNy1iMjA5LWFkZjQ5Zjc0ZDhmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOFQwOTM2NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hN2I4ZWNkMjc2NjMzMjFjNTA5N2UzMmJmOGM1NjQ5MTY2M2ExMTc0NDE2NTFkYzAyZDNmMGEwYjNjYjQ2ODMzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uoBZV5Yom31xgmFUsWEz4SK3J_PgvT3EHN0hhmvfXUU"
        ]
    },
    { id: 5, title: "V.OS Form", date: "2023", description: "Formulaires simple pour vision os", descDetaille: "Blabla le projet façon détaillé", githubUrl: "https://github.com/ewanquelo", projectUrl: "https://vos-form.com" },
    { id: 6, title: "Portfolio1", date: "2023", description: "Portfolio en html/css uniquement", descDetaille: "Dans le cadre de ma première année de BUT MMI j'ai eu comme projet scolaire de réaliser un portfolio uniquement en HTML/CSS. Seul le formulaire de contact a été fait en PHP.", gallery: ["https://private-user-images.githubusercontent.com/156847481/307632792-e27df51f-52b4-430d-9a9a-a18298d68957.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM2NTM3OTYsIm5iZiI6MTczMzY1MzQ5NiwicGF0aCI6Ii8xNTY4NDc0ODEvMzA3NjMyNzkyLWUyN2RmNTFmLTUyYjQtNDMwZC05YTlhLWExODI5OGQ2ODk1Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOFQxMDI0NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MTFkOTYxNTM4NTZmOGI1MjAzMmIxYWU2NmUyZGQ0YzU0NzIyMzhlMjFjMzJjM2ZhYzlkZDgxOWU1YzJiY2M4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.okXzlfKe_-hdphEmL_n_lST5feT9kDhM20NU8j1JlmE", "https://private-user-images.githubusercontent.com/156847481/393586789-5aae1e81-e1ca-4b16-ada3-2326e25a7372.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM2NTQwNTgsIm5iZiI6MTczMzY1Mzc1OCwicGF0aCI6Ii8xNTY4NDc0ODEvMzkzNTg2Nzg5LTVhYWUxZTgxLWUxY2EtNGIxNi1hZGEzLTIzMjZlMjVhNzM3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOFQxMDI5MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NTFkMmQ0ZTdjNzAzNDJiNzBmMGY0NzdiNDE1OWU5NDlhOGNkMjgwNmQzOTIxYTE4ZTlmMGJlOTM1MjM5ZjljJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gqNvWhKBeoyzQdsidnifrM0BwIgwsTQTN-suz-FEjiQ",], projectUrl: "https://perso.univ-lemans.fr/~i2300634/portfolio/", githubUrl: "https://github.com/EwanQuelo/portfolio1", },
    { id: 7, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
    { id: 8, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
    { id: 9, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
];



const MenuProjet = () => {
    return (
        <section className="menu">
            <ul>
                <h2>Projets</h2>
                {projects.map((project) => (
                    <li key={project.id} className="menu-item">
                        <Link to={`/projet/${project.id}`} className="titreMenu">
                            {project.title}
                        </Link>

                        <span className="project-date">{project.date}</span>
                        <div className="project-details">
                            <span className="project-description">{project.description}</span>
                            {project.enCours && (
                                <span className="enCours">|{project.enCours}|</span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MenuProjet;
