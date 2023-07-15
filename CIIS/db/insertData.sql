INSERT INTO type_events(name,about) values("CIIS","Congreso Internacional de Informática y Sistemas."),("POSTMASTER","Encuentro de egresados");

-- Events

INSERT INTO events(name,about,start_date,exp_date,type_event_id) 
values("CIIS XIII","Décimo tercera edición del congreso de informática y sistemas","2012-12-05","2012-12-07",1),
("CIIS XIV","Décimo cuarta edición del congreso de informática y sistemas","2013-10-05","2013-10-19",1),
("CIIS XV","Décimo quinta edición del congreso de informática y sistemas",null,null,1),
("CIIS XVI","Décimo quinta edición del congreso de informática y sistemas",null,null,1),
("CIIS XVII","Décimo séptima edición del congreso de informática y sistemas","2016-11-07","2016-11-12",1),
("CIIS XVIII","Décimo octava edición del congreso de informática y sistemas","2017-11-13","2017-11-17",1),
("CIIS XIX","Décimo novena edición del congreso de informática y sistemas","2018-11-12","2018-11-16",1),
("CIIS XX","Vigésima edición del congreso de informática y sistemas","2019-11-11","2019-11-15",1),
("CIIS XXI","Vigésimo primera edición del congreso de informática y sistemas","2020-11-09","2020-11-13",1),
("CIIS XXII","Vigésimo segunda edición del congreso de informática y sistemas","2021-11-06","2021-11-10",1),
("CIIS XXIII","Vigésimo tercera edición del congreso de informática y sistemas","2022-11-07","2022-11-11",1),
("POSTMASTER XX","Vigésimo Postmaster del Encuentro de engresados","2023-08-11",null,2);


INSERT INTO gallery_events(name,dir_photo,eventId) values
("ciis-history/ciis-xiii-FlyerPrincipal.jpg","Flyer principal",1),
("ciis-history/ciis-xiv-FlyerPrincipal.jpg","Flyer principal",2),
("ciis-history/ciis-xiv-postmasterXI.png","Flyer de postmaster XI",2),
("ciis-history/ciis-xiv-EventoRelacionado.jpg","Flyer de evento relacionado",2),
("ciis-history/ciis-xv-BannerPromocional.png","Banner promocional",3),
("ciis-history/ciis-xv-BannerPromocionalLogo.jpg","Banner promocional (logo)",3),
("ciis-history/ciis-xv-FotografiaPonencia.jpg","Fotografía de ponencia",3),
("ciis-history/ciis-xvi-FlyerPrincipal.jpg","Flyer principal",4),
("ciis-history/ciis-xvi-FlyerPromocional.png","Flyer promocional",4),
("ciis-history/ciis-xvi-FlyerConcursoProgramacion.jpg","Flyer de concurso (programación)",4),
("ciis-history/ciis-xvi-auditorio.jpg","Fotografía de auditorío",4),
("ciis-history/ciis-xvi-ReconocimientoPonente.jpg","Reconocimiento a ponente",4),
("ciis-history/ciis-xvii-FlyerPrincipal.jpg","Flyer principal",5),
("ciis-history/ciis-xvii-eventoRelacionado.png","Flyer de evento relacionado",5),
("ciis-history/ciis-xvii-FlyerConcursoProgramacion.jpg","Flyer de concurso (programación)",5),
("ciis-history/ciis-xvii-auditorio.jpg","Fotografía de auditorío",5),
("ciis-history/ciis-xvii-FotografiaPonencia.jpg","Fotografía de ponencia",5),
("ciis-history/ciis-xvii-organizadores.jpg","Entrega de organizadores",5),
("ciis-history/ciis-xviii-FlyerPrincipal.jpg","Flyer principal",6),
("ciis-history/ciis-xviii-auditorio.jpg","Fotografía de auditorío",6),
("ciis-history/ciis-xviii-FotografiaPonencia.jpg","Fotografía de ponencia",6),
("ciis-history/ciis-xix-FlyerPrincipal.jpg","Flyer principal",7),
("ciis-history/ciis-xix-postmasterXV.jpg","Flyer de postmaster XV",7),
("ciis-history/ciis-xix-FeriaTecnologica.jpg","Fotografía de feria tecnológica",7),
("ciis-history/ciis-xix-auditorio.jpg","Fotografía de auditorío",7),
("ciis-history/ciix-xix-ponencia.jpg","Fotografía de ponencia",7),
("ciis-history/ciis-xix-entregaCertificado.jpg","Entrega de certificado a ponente",7),
("ciis-history/ciis-xx-FlyerDeConcursosCall4Posters.jpg","Flyer de concursos (call for posters)",8),
("ciis-history/ciis-xx-postmasterXVI.jpg","Flyer de postmaster XVI",8),
("ciis-history/ciis-xx-feriaTecnologica.jpg","Flyer de feria tecnológica",8),
("ciis-history/ciis-xx-inauguracion.jpg","Fotografía de inauguración",8),
("ciis-history/ciis-xx-auditorio.jpg","Fotografía de auditorío",8),
("ciis-history/ciis-xx-AntesalaEvento.jpg","Fotografía de antesala al evento",8),
("ciis-history/ciis-xxi-flyers-ponentes1.jpg","Flyer de ponentes - parte 1",9),
("ciis-history/ciis-xxi-flyers-ponentes2.jpg","Flyer de ponentes - parte 2",9),
("ciis-history/ciis-xxi-flyers-ponentes3.jpg","Flyer de ponentes - parte 3",9),
("ciis-history/ciis-xxii-postmater-18.jpg","Flyer de postmaster XVII",9),
("ciis-history/ciis-xxi-discusion.jpg","Flyer de panel de discusión",9),
("ciis-history/ciis-xxi-feriaTecnologica.jpg","Flyer de feria tecnológica",9),
("ciis-history/ciis-xxii-CronogramaPonencias.jpg","Cronograma de ponencias",10),
("ciis-history/ciis-xxii-postmater-18.jpg","Flyer de postmaster XVIII",10),
("ciis-history/ciis-xxii-FlyerPrimerPosterSession.jpg","Flyer de primer poster session",10),
("ciis-history/ciis-xxii-call4posters.jpg","Flyer de concursos (call for posters)",10),
("ciis-history/ciis-xxii-HACKATHON.jpg","Flyer de concursos (hackathon)",10),
("ciis-history/ciis-xxii-organizadores.jpg","Organizadores del evento",10),
("ciis-history/ciis-xxiii-FlyerPrincipal.jpg","Flyer principal",11),
("ciis-history/ciis-xxiii-CronogramaPonencias.jpg","Cronograma de ponencias",11),
("ciis-history/ciis-xxiii-postmasterXIX.png","Flyer de postmaster XIX",11),
("ciis-history/ciis-xxiii-auditorio.jpg","Fotografía de auditorío",11),
("ciis-history/ciis-xxiii-talleres.jpg","Fotografía de talleres",11),
("ciis-history/ciis-xxiii-Estudiantes.jpg","Fotografía de estudiantes",11);


-- Insertar roles

INSERT INTO roles (name_role) values ('Administrador'),('Asistente'),('Organizador');

-- Tipo de asistente

INSERT INTO type_attendees(name_attendee,price_attendee,isuniversity,event_id) 
values
('Universitario Interno',15.00,1,12),
('Universitario Externo',20.00,1,12),
('Público en general',25.00,0,12);