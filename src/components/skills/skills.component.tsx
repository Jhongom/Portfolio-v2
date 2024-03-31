import React, { useState } from 'react';
import "./skills.styles.css"
const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="skills_container">
            <div className="title_box">
                <h1 className="skills-title">Skills</h1>
            </div>

            <div className="tabs">
                <button
                    className={activeTab === 0 ? 'active' : ''}
                    onClick={() => handleTabChange(0)}
                >
                    Software
                </button>
                <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => handleTabChange(1)}
                >
                    Experience
                </button>
                <button
                    className={activeTab === 2 ? 'active' : ''}
                    onClick={() => handleTabChange(2)}
                >
                    Languages
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 0 && <p>This is the content of Tab 1</p>}
                {activeTab === 1 && <p>This is the content of Tab 2</p>}
                {activeTab === 2 && <p>This is the content of Tab 3</p>}
            </div>
        </div>
    );
};

export default Skills;
