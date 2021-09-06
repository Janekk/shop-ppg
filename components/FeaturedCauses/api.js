import theDoorLogo from "../../mocks/TheDoorLogo.png";
import chinaYouthLogo from "../../mocks/ChinaYouthLogo.png";
import globalGreen from "../../mocks/GlobalGreen.png";

export default class Api {
  static getFeaturedCauses() {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
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
          ]),
        2000
      )
    );
  }
}
