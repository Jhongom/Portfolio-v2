import React, { useState } from 'react';
import "./skills.styles.css"
import code  from "../../assets/icons/code-24.svg"
import experience  from "../../assets/icons/verified-24d.svg"
import language  from "../../assets/icons/emoji-people-24.svg"

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
                ><span> <img src={code} alt="code"/></span>
                    Software
                </button>
                <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => handleTabChange(1)}
                ><span> <img src={experience} alt=""/></span>
                    Experience
                </button>
                <button
                    className={activeTab === 2 ? 'active' : ''}
                    onClick={() => handleTabChange(2)}
                ><span> <img src={language} alt=""/></span>
                    Languages
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 0 && <p> This is the content of Tab 1</p>}
                {activeTab === 1 && <p>This is the content of Tab 2</p>}
                {activeTab === 2 && <p>This is the content of Tab 3</p>}
            </div>
        </div>
    );
};

export default Skills;
