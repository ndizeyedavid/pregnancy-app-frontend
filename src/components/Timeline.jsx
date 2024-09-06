import React, { useRef, useEffect } from 'react';

const weeksData = [
    {
        week: 'Week 1',
        description: 'This first week is actually your menstrual period. Because your expected birth date (EDD or EDB) is calculated from the first day of your last period.',
    },
    {
        week: 'Week 2',
        description: 'Ovulation occurs this week, and conception is possible. Ensure you are eating a balanced diet and consider taking prenatal vitamins with folic acid.',
    },
    {
        week: 'Week 3',
        description: 'Your baby is now a tiny ball of cells. Avoid alcohol and smoking. Continue with prenatal vitamins and maintain a healthy diet.',
    },
    {
        week: 'Week 4',
        description: 'You might experience some early pregnancy symptoms. Continue to eat healthily, avoid harmful substances, and get plenty of rest.',
    },
    {
        week: 'Week 5',
        description: 'The baby\'s heart and other vital organs are beginning to form. Stay hydrated, eat nutrient-rich foods, and take your prenatal vitamins.',
    },
    {
        week: 'Week 6',
        description: 'Morning sickness might start this week. Keep your meals light and frequent, and avoid strong odors that trigger nausea.',
    },
    {
        week: 'Week 7',
        description: 'The baby\'s brain and face are developing. Ensure you are getting enough sleep and start planning your first prenatal visit.',
    },
    {
        week: 'Week 8',
        description: 'Your baby is growing rapidly, and all major organs are in place. Continue taking prenatal vitamins, and start considering light exercises like walking.',
    },
    {
        week: 'Week 9',
        description: 'Your baby\'s heartbeat can be detected this week. Avoid raw or undercooked foods, and ensure you are getting enough calcium and iron.',
    },
    {
        week: 'Week 10',
        description: 'Your baby is now officially a fetus. Begin wearing comfortable clothing, and keep up with your prenatal care routine.',
    },
    {
        week: 'Week 11',
        description: 'Your baby\'s bones are hardening. Eat foods rich in calcium and protein, and stay active with light exercises.',
    },
    {
        week: 'Week 12',
        description: 'This is the end of the first trimester. Schedule a prenatal checkup and discuss any concerns with your healthcare provider.',
    },
    {
        week: 'Week 13',
        description: 'Welcome to the second trimester! Your energy levels may start to increase. Continue with healthy eating and regular physical activity.',
    },
    {
        week: 'Week 14',
        description: 'Your baby\'s facial features are becoming more distinct. Focus on eating enough fiber to avoid constipation, and stay hydrated.',
    },
    {
        week: 'Week 15',
        description: 'Your baby can now make facial expressions. Start considering prenatal classes, and ensure you are getting enough rest and relaxation.',
    },
    {
        week: 'Week 16',
        description: 'Your baby\'s movements may become noticeable soon. Maintain a balanced diet, stay active, and consider starting light yoga or stretching exercises.',
    },
    {
        week: 'Week 17',
        description: 'Your baby\'s skeleton is changing from soft cartilage to bone. Keep up with prenatal vitamins, particularly those with calcium and vitamin D.',
    },
    {
        week: 'Week 18',
        description: 'Your baby\'s fingerprints are forming. Continue with regular prenatal checkups and discuss any discomforts with your healthcare provider.',
    },
    {
        week: 'Week 19',
        description: 'You might feel your baby\'s movements more clearly now. Stay hydrated, and focus on foods rich in omega-3 fatty acids for brain development.',
    },
    {
        week: 'Week 20',
        description: 'You\'re halfway through your pregnancy! Schedule your mid-pregnancy ultrasound, and keep up with your healthy eating and exercise routine.',
    },
    {
        week: 'Week 21',
        description: 'Your baby\'s digestive system is maturing. Continue with a healthy diet, and consider taking childbirth classes to prepare for labor and delivery.',
    },
    {
        week: 'Week 22',
        description: 'Your baby\'s senses are developing. Ensure you\'re getting enough protein and iron, and consider a gentle exercise routine like swimming.',
    },
    {
        week: 'Week 23',
        description: 'Your baby\'s hearing is becoming more acute. Play soothing music, talk to your baby, and continue with your prenatal care routine.',
    },
    {
        week: 'Week 24',
        description: 'Your baby\'s lungs are developing rapidly. Avoid secondhand smoke, stay hydrated, and consider prenatal yoga for relaxation.',
    },
    {
        week: 'Week 25',
        description: 'Your baby\'s hair is starting to grow. Focus on foods rich in omega-3s, and discuss any new symptoms with your healthcare provider.',
    },
    {
        week: 'Week 26',
        description: 'Your baby\'s eyes are forming and will soon open. Stay active with light exercises, and make sure to rest whenever you feel tired.',
    },
    {
        week: 'Week 27',
        description: 'You\'re nearing the third trimester. Start planning your birth plan and discuss it with your healthcare provider.',
    },
    {
        week: 'Week 28',
        description: 'Welcome to the third trimester! Your baby\'s brain is growing rapidly. Continue with prenatal vitamins and prepare for more frequent checkups.',
    },
    {
        week: 'Week 29',
        description: 'Your baby\'s bones are fully developed but still soft. Ensure you\'re getting enough calcium, and start thinking about postpartum care.',
    },
    {
        week: 'Week 30',
        description: 'Your baby\'s vision is improving, and they can distinguish between light and dark. Stay hydrated and focus on nutrient-rich meals.',
    },
    {
        week: 'Week 31',
        description: 'Your baby\'s weight is rapidly increasing. Prepare for any upcoming baby showers, and start setting up the nursery.',
    },
    {
        week: 'Week 32',
        description: 'Your baby is practicing breathing motions. Ensure you\'re eating enough to support both you and your baby\'s nutritional needs.',
    },
    {
        week: 'Week 33',
        description: 'Your baby\'s skin is becoming less wrinkled as fat builds up. Focus on resting, as sleep may become more difficult in the coming weeks.',
    },
    {
        week: 'Week 34',
        description: 'Your baby\'s immune system is maturing. Continue to avoid any harmful substances, and start preparing your hospital bag.',
    },
    {
        week: 'Week 35',
        description: 'Your baby\'s kidneys are fully developed. Stay active with gentle exercises and focus on eating small, frequent meals to avoid discomfort.',
    },
    {
        week: 'Week 36',
        description: 'Your baby is getting into position for birth. Attend any final prenatal classes and finalize your birth plan.',
    },
    {
        week: 'Week 37',
        description: 'Your baby is considered full-term at 37 weeks. Ensure you have all necessary items for the hospital, and keep in close contact with your healthcare provider.',
    },
    {
        week: 'Week 38',
        description: 'Your baby\'s brain and lungs are still developing. Rest as much as possible and prepare for labor, which could start any day now.',
    },
    {
        week: 'Week 39',
        description: 'Your baby is fully grown and ready for birth. Keep your hospital bag ready and stay in touch with your healthcare provider for any signs of labor.',
    },
    {
        week: 'Week 40',
        description: 'You\'re at your due date! Monitor any signs of labor closely and stay in close contact with your healthcare provider.',
    },
    {
        week: 'Week 41',
        description: 'If you haven\'t gone into labor yet, your healthcare provider may discuss options for induction. Stay calm and prepared for your baby\'s arrival.',
    },
];

const calculateCurrentWeek = (firstPregnancyDate) => {
    const startDate = new Date(firstPregnancyDate);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const currentWeek = Math.floor(differenceInDays / 7) + 1;
    return currentWeek;
};

const Timeline = ({ firstPregnancyDate }) => {
    const currentWeek = calculateCurrentWeek(firstPregnancyDate);
    const currentWeekRef = useRef(null);

    useEffect(() => {
        if (currentWeekRef.current) {
            currentWeekRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentWeek]);

    return (
        <div className="p-3">
            {weeksData.map((item, index) => (
                <div
                    className="flex gap-x-3"
                    key={index}
                    ref={currentWeek === index + 1 ? currentWeekRef : null}
                >
                    <div className={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${currentWeek === index + 1 ? 'after:bg-[#E91E63]' : 'after:bg-[#FFCDD2]'}`}>
                        <div className="relative z-10 flex items-center justify-center size-7">
                            <div className={`size-5 rounded-full ${currentWeek === index + 1 ? 'bg-[#E91E63]' : 'bg-[#FFCDD2]'} `}></div>
                        </div>
                    </div>

                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                            {item.week}
                        </h3>
                        <p className="mt-1 text-sm text-gray-700">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Timeline
