
# 📈 Rooksafe: Fintech

Las estafas de pseudo traders engañan a miles con falsas promesas de dinero fácil. Rooksafe es una plataforma que empodera a los usuarios a través de simuladores de inversión, módulos educativos y alertas de perfiles sospechosos. Al enseñar los riesgos reales y cómo identificar señales de fraude, Rooksafe ayuda a los usuarios a tomar decisiones financieras informadas, reduciendo su vulnerabilidad

## 🚨 Demo

http://rooksafe-front.s3-website-us-east-1.amazonaws.com/

## 🚨 Problema

En los últimos años, los casos de estafas financieras han aumentado en más del
50%, especialmente las relacionadas con inversiones fraudulentas y pseudo
traders en redes sociales, que prometen rendimientos de hasta el 300% en
cuestión de semanas, según estudios de seguridad financiera.
Estos falsos "gurús financieros" se aprovechan de personas sin conocimientos
financieros, persuadiéndolas con tácticas de manipulación emocional y marketing
engañoso.
Se estima que solo en España, más de 200,000 personas caen anualmente en
este tipo de engaños, lo que representa pérdidas acumuladas que superan los 150
millones de euros al año.
Este problema se ha exacerbado por el fácil acceso a las redes sociales, donde
estos pseudo traders alcanzan audiencias masivas y venden cursos o asesorías
que en realidad no ofrecen ningún valor. La falta de educación financiera hace
que muchas personas no detecten las señales de alerta comunes, como la
promesa de ingresos exorbitantes y la falta de información sobre los riesgos
reales.
Además, muchos estafadores muestran "testimonios" y gráficos que aparentan
ganancias ficticias, manipulando la información para crear una apariencia de éxito
y seguridad. La escasa accesibilidad a una educación financiera práctica y gratuita
contribuye a esta vulnerabilidad, haciendo urgente la creación de una solución
que eduque y alerte a los potenciales inversores sobre estos riesgos.

## 💡 Nuestra Solución

Como respuesta al problema de las estafas sobre inversiones y pseudo traders,
Igrowker propone Rooksafe, una plataforma educativa e informativa diseñada
para empoderar y proteger a las personas sin experiencia en el mundo financiero.
Rooksafe ofrece un simulador de inversiones que utiliza datos ficticios para
recrear situaciones de mercado realistas, permitiendo a los usuarios de todas las
edades practicar y aprender sobre inversiones sin arriesgar su dinero.
En lugar de depender de falsas promesas de "dinero rápido", los usuarios verán
cómo se comportan sus inversiones en escenarios simulados que reflejan las
fluctuaciones y riesgos reales del mercado, ayudándolos a construir una
comprensión genuina y libre de presión sobre el mundo financiero.
Además, Rooksafe cuenta con un módulo educativo, con contenidos para
principiantes, que explica desde los conceptos básicos de inversión hasta cómo
identificar y evitar estafas comunes en redes sociales. Para combatir la
desinformación, Rooksafe incluirá un sistema de alerta que evalúa perfiles
sospechosos de pseudo traders, ayudando a los usuarios a verificar perfiles y
detectar posibles señales de fraude.
Este sistema identifica factores de riesgo, como promesas de rentabilidad irreal y
falta de transparencia, educando
a los usuarios sobre cómo se
construyen estas estafas y
ayudándolos a tomar decisiones
informadas. Con su combinación
de herramientas educativas,
simulación de inversiones y
alertas de fraude, Rooksafe
capacita a sus usuarios para
que tomen decisiones financieras
seguras y basadas en datos,
protegiéndolos del impacto
económico y emocional de las
estafas financieras.

## ✨ Características Clave

- **🚪 Autenticación de usuarios**: Registro e inicio de sesión seguros, protegiendo las rutas con Guards.
- **📊 Grafico de evolución de simbolos en tiempo real**: Datos del mercado actualizados mediante el api proveniente del backend en Django.
- **ℹ️ Filtros personalizados**: Información sobre estafas e inversiones en base al perfil del usuario.

## ⚙️ Tecnologías Utilizadas

### Frontend:
- **Angular V18** 
- **Material UI**
- **CSS**
- **TypeScript**

![Angular V18](src/assets/icons/A.png)
![Material UI](src/assets/icons/material.png)
![CSS](src/assets/icons/css.png)
![Typescript](src/assets/icons/ts.png)


### Backend:
- **Tecnologías usadas**: Python - Django
- **Base de Datos**: PostgreSQL

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio:

```bash
git clone https://github.com/igrowker/i004-rooksafe-front
```

### 2. Navegar al directorio del proyecto:

```bash
cd i004-rooksafe-front
```

### 3. Instalar las dependencias:

```bash
npm install
```

### 4. Configurar variables de entorno:

Crea una carpeta environment con un archivo `environment.ts` en la raíz del proyecto para declarar la url de la API de la siguiente forma:

```bash
export const environment = {
    production: false,
    apiUrl: 'http://rooksafe-alb-2078386678.us-east-1.elb.amazonaws.com/'
  };

```

### 5. Iniciar la aplicación:

```bash
ng serve
```

## 👥 Equipo

### Project Manager:
- **[Cintia Coccia](https://www.linkedin.com/in/cintia-coccia-b2786197)**

### Frontend:
- **[Flavio Gastón Salasevicius](https://www.linkedin.com/in/fsalasevicius)**
- **[Juan Marco Raimundo](https://www.linkedin.com/in/juan-marco-raimundo-984924141)**

### Backend:
- **[Anzhela Kapliienko](https://www.linkedin.com/in/anzhela-kapliienko/)**
- **[Daniel Frias](https://www.linkedin.com/in/frias-daniel/)**
- **[Eric Christensen](https://www.linkedin.com/in/eric-christensen-arocena-691653184/)**

### QA:
- **[Fidel Armando Brasesco Hernandez](https://www.linkedin.com/in/fidel-brasesco)**
- María Luisa Luoni
- **[Marisol Rosales Arellano](https://www.linkedin.com/in/marisol-r-3b917762/)**

### UX/UI:
- Agustina López
- Alejandro Lucero
- Sergio Rodríguez Rivero

<br/>

---

¡Gracias por visitarnos, Equipo de **Rooksafe**! 

