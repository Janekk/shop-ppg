import theDoorLogo from "../../mocks/TheDoorLogo.png";
import chinaYouthLogo from "../../mocks/ChinaYouthLogo.png";
import globalGreen from "../../mocks/GlobalGreen.png";
import pedriaticFoundation from "../../mocks/PedriaticFoundation.png";

export default class Api {
  static findCauses() {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              id: "0",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "1",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "2",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "3",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "4",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "5",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "6",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "7",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "8",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "9",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "10",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "11",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "12",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "13",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "14",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "15",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "16",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "17",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "18",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "19",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "20",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "21",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "22",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "23",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "24",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "25",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "5",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "6",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "7",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "8",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "9",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "10",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "11",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "12",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "13",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "14",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "15",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "16",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "17",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "18",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "19",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "20",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "21",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "22",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "23",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "24",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "25",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "5",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "6",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "7",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "8",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "9",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "10",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "11",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "12",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "13",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "14",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "15",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "16",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "17",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "18",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "19",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "20",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "21",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "22",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "23",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "24",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "25",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "5",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "6",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "7",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "8",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "9",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "10",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "11",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "12",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "13",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "14",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "15",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "16",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "17",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "18",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "19",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "20",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "21",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
            {
              id: "22",
              imageSrc: chinaYouthLogo,
              name: "China Youth Development Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "CYDF’s mission is to develop Chinese youth through education, science and technology, culture, physical education, health, and environmental protection.",
            },
            {
              id: "23",
              imageSrc: globalGreen,
              name: "Global Green",
              location: "Chicago, IL | 42-3231231",
              description:
                "Global Green’s mission is to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace.",
            },
            {
              id: "24",
              imageSrc: pedriaticFoundation,
              name: "National Pediatric Cancer Foundation",
              location: "Chicago, IL | 42-3231231",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque ligula vel imperdiet sodales. Nulla at sem id ligula vehicula condimentum. Ut tempus dui turpis, quis dictum purus mattis nec. Curabitur egestas nisl a nisl lobortis sollicitudin. Mauris pellentesque ipsum risus, id lobortis velit lacinia id. Pellentesque sollicitudin, felis in vulputate posuere, orci lacus blandit dolor, ut tempor ipsum neque in leo. Donec varius varius condimentum.",
            },
            {
              id: "25",
              imageSrc: theDoorLogo,
              name: "The Door",
              location: "San Francisco, CA | 42-3231231",
              description:
                "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
            },
          ]),
        2000
      )
    );
  }
}
