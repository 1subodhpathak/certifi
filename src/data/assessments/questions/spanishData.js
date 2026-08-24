import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessEmailImage from '../../../assets/assessments/spanish/business_email.png';
import meetingScheduleImage from '../../../assets/assessments/spanish/meeting_schedule.png';
import officeDirectoryImage from '../../../assets/assessments/spanish/office_directory.png';

export const spanishData = {
  id: ASSESSMENT_TYPES.spanish,
  title: 'Spanish Professional Language Proficiency Certification',
  shortTitle: 'Spanish',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Interactive professional language assessment covering workplace comprehension, business communication, schedules, charts, tables, grammar in context, professional tone, negotiation, and customer communication.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Questions include message/email exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. Read each scenario carefully and choose the most accurate and professional answer. No negative marking.',
  questions: [
    {
      id: 'es-01',
      type: 'mcq',
      title: 'Correo profesional',
      difficulty: 'easy',
      points: 5,
      prompt: `Revise el correo.

{{image}}

¿Cuál es el objetivo principal de Daniel?`,
      image: {
        src: businessEmailImage,
        alt: 'Correo profesional solicitando cambio de horario'
      },
      options: [
        'Cancelar la reunión definitivamente.',
        'Pedir de forma cortés un cambio de hora y solicitar confirmación.',
        'Enviar una factura.',
        'Quejarse del cliente.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. El correo solicita mover la reunión y confirmar el nuevo horario. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-02',
      type: 'mcq',
      title: 'Comprensión de agenda',
      difficulty: 'easy',
      points: 5,
      prompt: `Revise la agenda.

{{image}}

Solo está disponible de 11:15 a 12:30. ¿A qué actividad puede asistir completa?`,
      image: {
        src: meetingScheduleImage,
        alt: 'Agenda profesional'
      },
      options: [
        'A la llamada con el proveedor.',
        'A la revisión con el cliente.',
        'A la revisión del presupuesto.',
        'A la presentación de marketing.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. La presentación dura de 11:30 a 12:15. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-03',
      type: 'mcq',
      title: 'Petición cortés',
      difficulty: 'easy',
      points: 5,
      prompt: `Escribe por primera vez a un cliente importante.

¿Cuál es la frase más profesional?`,
      options: [
        '¿Podría confirmar, por favor, si el jueves a las 10 le viene bien?',
        'Confirme jueves 10.',
        'Necesito su respuesta ahora.',
        'Jueves 10. Responda.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. El condicional de cortesía y \'por favor\' crean un registro profesional. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-04',
      type: 'mcq',
      title: 'Condicional real',
      difficulty: 'easy',
      points: 5,
      prompt: `Complete:

«Si el proveedor confirma hoy, ___ el pedido mañana.»`,
      options: [
        'liberamos ayer',
        'liberaríamos',
        'liberaremos',
        'liberábamos'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Con si + presente, una consecuencia futura puede ir en futuro. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-05',
      type: 'mcq',
      title: 'Pronombres',
      difficulty: 'easy',
      points: 5,
      prompt: `«Envié el contrato a Laura.»

¿Cuál es la continuación correcta?`,
      options: [
        'Se lo envié ayer.',
        'La lo envié ayer.',
        'Le la envié ayer.',
        'Los envié a ella.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. La combinación correcta es \'se lo\' para objeto indirecto + directo. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-06',
      type: 'mcq',
      title: 'Interpretación de gráfico',
      difficulty: 'medium',
      points: 5,
      prompt: `Observe el gráfico.

{{chart}}

¿Qué frase describe mejor la tendencia?`,
      chart: {
        type: 'line',
        title: 'Solicitudes de clientes por semana',
        xAxis: ['S1','S2','S3','S4','S5'],
        series: [{ name: 'Solicitudes', data: [42,47,45,58,66] }]
      },
      options: [
        'Disminuyen cada semana.',
        'Se mantienen exactamente iguales.',
        'Las solicitudes aumentan en general, pese a una ligera caída en la semana 3.',
        'Caen con fuerza después de la semana 2.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. La serie sube de 42 a 66 con una pequeña caída intermedia. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-07',
      type: 'mcq',
      title: 'Conversación telefónica',
      difficulty: 'medium',
      points: 5,
      prompt: `Lea el flujo.

{{diagram}}

¿Qué frase completa mejor la conversación?`,
      diagram: `flowchart LR
  A["Cliente: ¿Puedo hablar con la Sra. López?"] --> B["Recepción: Está en una reunión hasta las 15:00."]
  B --> C["Cliente: ______"]
  C --> D["Recepción: Claro, le transmitiré el mensaje."]`,
      options: [
        'Entonces cuelgo.',
        'Deme su número personal.',
        'Tiene que salir de la reunión ahora.',
        '¿Podría pedirle que me devuelva la llamada, por favor?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. La petición de devolución de llamada encaja con la respuesta de recepción. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-08',
      type: 'mcq',
      title: 'Atención al cliente',
      difficulty: 'medium',
      points: 5,
      prompt: `Un cliente escribe: «Mi pedido lleva cinco días de retraso y nadie me informa.»

¿Cuál es la mejor respuesta?`,
      options: [
        'Espere un poco más.',
        'Lamentamos el retraso. Estamos revisando el envío y le enviaremos una actualización hoy antes de las 16:00.',
        'Es culpa del transportista.',
        'Seguramente introdujo mal la dirección.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Reconoce el problema y ofrece acción y plazo concreto. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-09',
      type: 'mcq',
      title: 'Vocabulario de oficina',
      difficulty: 'medium',
      points: 5,
      prompt: `Observe el directorio.

{{image}}

¿Dónde debe entregar un nuevo empleado sus documentos de incorporación?`,
      image: {
        src: officeDirectoryImage,
        alt: 'Directorio de oficinas'
      },
      options: [
        'En Recepción.',
        'En Finanzas.',
        'En Recursos Humanos.',
        'En las salas de reunión.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Los documentos de incorporación suelen gestionarse en RR. HH. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-10',
      type: 'mcq',
      title: 'Comprensión de tabla',
      difficulty: 'medium',
      points: 5,
      prompt: `Revise la tabla.

{{table}}

¿Qué proveedor cumplió exactamente el plazo prometido?`,
      table: {
        headers: ['Proveedor','Prometido','Real'],
        rows: [['A','5 días','7 días'],['B','8 días','8 días'],['C','4 días','6 días'],['D','10 días','13 días']]
      },
      options: [
        'Proveedor B.',
        'Proveedor A.',
        'Proveedor C.',
        'Proveedor D.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. B tiene exactamente 8 días prometidos y 8 reales. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-11',
      type: 'mcq',
      title: 'Pasado en contexto',
      difficulty: 'medium',
      points: 5,
      prompt: `Complete:

«Yo ___ el informe cuando llamó el director.»`,
      options: [
        'preparé mañana',
        'estaba preparando',
        'prepararé estaba',
        'preparo había'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. La acción en progreso en el pasado se expresa con \'estaba preparando\'. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-12',
      type: 'mcq',
      title: 'Reescritura formal',
      difficulty: 'medium',
      points: 5,
      prompt: `Un colega escribió: «Envíame los números hoy.»

¿Cuál versión es adecuada para un director externo?`,
      options: [
        'Envíe las cifras hoy.',
        'Quiero las cifras ahora.',
        'Cifras. Hoy.',
        '¿Podría enviarme las cifras antes del final del día, por favor?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. La formulación correcta es cortés, específica y profesional. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-13',
      type: 'mcq',
      title: 'Lectura de desempeño',
      difficulty: 'hard',
      points: 5,
      prompt: `Observe el gráfico.

{{chart}}

¿Cuál es la conclusión más sólida?`,
      chart: {
        type: 'bar',
        title: 'Satisfacción del cliente (%)',
        categories: ['Recepción','Rapidez','Claridad','Resolución'],
        series: [{ name: 'Puntuación', data: [92,74,88,69] }]
      },
      options: [
        'Recepción es el punto más débil.',
        'Claridad está por debajo del 70%.',
        'Todos los indicadores superan el 85%.',
        'La resolución de problemas es el principal área de mejora.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Resolución tiene la puntuación más baja: 69%. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-14',
      type: 'mcq',
      title: 'Conector lógico',
      difficulty: 'hard',
      points: 5,
      prompt: `Complete:

«Las ventas crecieron un 12%. ___, el margen cayó por el aumento de costes.»`,
      options: [
        'Por lo tanto',
        'Sin embargo',
        'Por ejemplo',
        'Del mismo modo'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. \'Sin embargo\' expresa contraste. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-15',
      type: 'mcq',
      title: 'Lenguaje de negociación',
      difficulty: 'hard',
      points: 5,
      prompt: `Quiere proponer una alternativa sin sonar impositivo.

¿Cuál frase es mejor?`,
      options: [
        'Debe aceptar dos entregas.',
        'Vamos a cambiar el plan.',
        'Podríamos considerar una entrega en dos fases, si le parece bien.',
        'Divida la entrega en dos.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. \'Podríamos considerar\' suaviza la propuesta y deja espacio a negociación. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-16',
      type: 'mcq',
      title: 'Interpretación de reunión',
      difficulty: 'hard',
      points: 5,
      prompt: `Lea la secuencia.

{{diagram}}

¿Cuál fue la decisión final?`,
      diagram: `sequenceDiagram
  participant C as Cliente
  participant V as Ventas
  participant F as Finanzas
  C->>V: Solicitamos un 8% de descuento
  V->>F: ¿Podemos aprobar el 8%?
  F-->>V: Máximo sin escalado: 5%
  V-->>C: Podemos ofrecer 5% ahora
  C-->>V: De acuerdo`,
      options: [
        'Ventas ofreció un 5% y el cliente lo aceptó.',
        'Finanzas aprobó el 8%.',
        'El cliente rechazó todo descuento.',
        'La negociación se canceló.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. La secuencia termina con la aceptación del 5%. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-17',
      type: 'mcq',
      title: 'Comparativos',
      difficulty: 'hard',
      points: 5,
      prompt: `Revise la tabla.

{{table}}

¿Qué frase es correcta?`,
      table: {
        headers: ['Equipo','Tiempo medio'],
        rows: [['París','2 h 10'],['Lyon','3 h 05'],['Bordeaux','1 h 45'],['Lille','2 h 35']]
      },
      options: [
        'Lyon responde más rápido que Bordeaux.',
        'Bordeaux responde más rápido.',
        'París es el equipo más lento.',
        'Lille responde menos lentamente que Bordeaux.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bordeaux tiene el menor tiempo medio. Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-18',
      type: 'mcq',
      title: 'Interpretación de instrucciones',
      difficulty: 'hard',
      points: 5,
      prompt: `Un gerente escribe:

«Las cifras mensuales son correctas, pero revise las dos variaciones señaladas antes de enviar el informe al cliente.»

¿Qué debe hacer primero?`,
      options: [
        'Enviar el informe ya.',
        'Borrar las variaciones.',
        'Reescribir todo el informe.',
        'Revisar las dos variaciones señaladas.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. La instrucción exige revisión antes del envío. Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-19',
      type: 'mcq',
      title: 'Tono profesional',
      difficulty: 'hard',
      points: 5,
      prompt: `¿Qué frase comunica mejor un retraso?`,
      options: [
        'Lamentamos el retraso. La nueva hora de finalización es las 17:00 y enviaremos una actualización a las 15:00.',
        'Va tarde, pero estará bien.',
        'Lo olvidamos, perdón.',
        'Todavía sin novedades.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. La respuesta reconoce el problema y ofrece nueva hora y seguimiento. Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'es-20',
      type: 'mcq',
      title: 'Comunicación integrada',
      difficulty: 'hard',
      points: 5,
      prompt: `Use el proceso.

{{diagram}}

¿Qué respuesta sigue mejor el patrón?`,
      diagram: `flowchart TB
  I["Incidente identificado"] --> A["Reconocer el problema"]
  A --> E["Explicar brevemente sin culpar"]
  E --> P["Indicar acción y plazo"]
  P --> F["Confirmar seguimiento"]`,
      options: [
        'Hemos recibido su mensaje.',
        'Fue culpa del proveedor.',
        'Lamentamos el incidente. Hemos identificado la causa, iniciado la corrección y confirmaremos la resolución antes de las 16:00.',
        'Gracias por esperar.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Incluye reconocimiento, explicación, acción, plazo y seguimiento. Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    }
  ],
};
