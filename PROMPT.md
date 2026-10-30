# Fantasy Character Creator - Project Prompts & Documentation

## Contexto del Proyecto
**Game Jam**: Fantasy Character Creator Prototype  
**Objetivo**: Creador interactivo de personajes de fantasía con generación aleatoria de Nombre y Clase, portraits, trasfondos y cartas de jugador.

---

## Prompt Inicial (Tarea 1)
> "Build an application that has a button. When clicked, the button should generate and display a random fantasy character with a unique Name and a Class (e.g., 'Mage', 'Rogue', 'Warrior')."

### Características Implementadas (Versión Final Completa):
1. **Botón Principal**: `Generate Character` / `Generar Personaje` con animación de dados y sonido visual.
2. **Generación Aleatoria**: Nombres de fantasía únicos (p. ej. *Theron Emberforge*, *Grommash Frostbane*) y Clases (p. ej. *Mage*, *Rogue*, *Warrior*, *Paladin*, *Ranger*, *Cleric*, etc.).
3. **Retratos Cartoon / Video Game Style**: Botones para `Generate Portrait` y `Regenerate Portrait` con arte estilizado de videojuegos por clase y raza.
4. **Refinamiento UI - Ancient Alchemist's Workbench**:
   - Fondo oscuro texturizado con veta de madera envejecida, pizarra y cálidos brillos de velas alquímicas.
   - Fuente de estilo fantasía decorativa para el nombre del personaje (`Cinzel Decorative`, `MedievalSharp`).
   - Tarjeta en forma de tableta alquímica de pergamino oscuro con remaches de bronce y marcas de transmutación.
5. **Generador de Trasfondo (Backstory Feature)**:
   - Botón `Generate Backstory` para crear historias de origen únicas de una o dos oraciones adaptadas a la clase, raza y nombre del personaje.
6. **Carta de Jugador con Borde (Player Card)**:
   - Tarjeta de jugador coleccionable con marcos decorativos dorados, gema de rareza y acabado de juego de rol.
7. **Estadísticas de Combate Aleatorias (5 Atributos)**:
   - Atributos dinámicos generados para **Salud (Health)**, **Maná (Mana)**, **Fuerza (Strength)**, **Inteligencia (Intelligence)** y **Carisma (Charisma)** equilibrados según la clase.
8. **Selector de Razas con Influencia en Estadísticas**:
   - Menú desplegable para seleccionar la raza (Humano, Elfo, Enano, Orco, Dracónido, Tiflin, Mediano, Gnomo, o Aleatoria).
   - Cada raza aplica modificadores únicos a los atributos (p. ej. Elfos ganan +Inteligencia y +Maná; Enanos ganan +Salud y +Fuerza).
9. **Generador de Gancho de Aventura (Generate course Hook)**:
   - Botón `Generate course Hook` que genera una mini-aventura conectada al trasfondo del personaje, con Objetivo, Peligro y Recompensa legendaria.
10. **Funcionalidad "Guardar en el Mazo" (Save to Deck & My Deck)**:
    - Botón `Save to Deck` / `Guardar en el Mazo`.
    - Sección interactiva **Mi Mazo (My Deck)** para visualizar, inspeccionar y gestionar las cartas coleccionadas con sus 5 atributos y misiones activas.
11. **Idioma**:
    - Toda la interfaz traducida al español con soporte bilingüe para los verificadores del laboratorio.

---

## Prompts para las Siguientes Fases del Game Jam
- **Fase 2**: Añadir generación y regeneración de retratos (portraits) para cada personaje.
- **Fase 3**: Refinar la interfaz de usuario con temática de fantasía medieval y estética de juego de rol.
- **Fase 4**: Añadir generación de historias y trasfondos (*backstories*) para los personajes.
- **Fase 5**: Transformar la UI en una carta coleccionable de jugador con estadísticas (Fuerza, Agilidad, Inteligencia, etc.) y función de guardar personajes en un mazo (*deck*).
