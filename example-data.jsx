import { useId } from 'react';

const exampleData = {
    personalInfo: {
        name: "Alex Pereira", 
        email: "apereira@gmail.com", 
        phone: "267-213-9864", 
        address: "1 UFC St"
    },
    sections: {
        educations: [
        {
            school: "Kickboxing Academy",
            degree: "Bachelors in Kickboxing",
            startDate: "04/09",
            endDate: "present",
            location: "São Bernardo do Campo, Brazil",
            isCollapsed: true,
            isHidden: false,
            id: useId(),
        },
        {
            school: "UFC Grappling Academy",
            degree: "Bachelors in Kickboxing",
            startDate: "10/21",
            endDate: "present",
            location: "Las Vegas, United States",
            isCollapsed: true,
            isHidden: true,
            id: useId(),
        },
    ],
        experience: [
            {
                companyName: "Ulitimate Fighting Championship",
                positionTitle: "Former Middleweight Champion",
                startDate: "11/21",
                endDate: "present",
                location: "Las Vegas, USA",
                description: "Currently in contention to be the champion of the Light Heavyweight Division. Ranked #3 in division. Former middleweight champion via knockout of Israel Adesanya. Travelling fighter",
                isCollapsed: true,
                isHidden: false,
                id: useId(),
            },
            {
                companyName: "Glory Kickboxing",
                positionTitle: "Former Middleweight/Light Heavyweight Champion",
                startDate: "3/14",
                endDate: "9/21",
                location: "United Kingdom",
                description: "Amassed 12-4 record while securing both middleweight and light heavyweight championships. Achieved 8 wins by KO and dished out 15 knockdowns over career",
                isCollapsed: true,
                isHidden: false,
                id: useId(),
            }
        ]
    }

}

export default exampleData;