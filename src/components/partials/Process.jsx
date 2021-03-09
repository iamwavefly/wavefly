import React from 'react'
import "../../styles/process.css"
import IdeaIcon from "../../assets/img/idea_icon.svg"
import ResearchIcon from "../../assets/img/research_icon.svg"
import DevelopmentIcon from "../../assets/img/development_icon.svg"
import ImplementationIcon from "../../assets/img/implementation_icon.svg"
import AnalysisIcon from "../../assets/img/analysis_icon.svg"
import ImprovementIcon from "../../assets/img/improvement_icon.svg"

function Process() {
    return (
        <div className="process_container">
            <div className="stage-1">
                <img src={IdeaIcon} alt="Idea stage" srcset=""/>
                <p>Idea Stage</p>
            </div>
            <div className="stage-2">
                <img src={ResearchIcon} alt="Research stage" srcset=""/>
                <p>Research Stage</p>
            </div>
            <div className="stage-3">
                <img src={DevelopmentIcon} alt="Development stage" srcset=""/>
                <p>Development Stage</p>
            </div>
            <div className="stage-4">
                <img src={ImplementationIcon} alt="Implementation stage" srcset=""/>
                <p>Implementation Stage</p>
            </div>
            <div className="stage-5">
                <img src={AnalysisIcon} alt="Analysis stage" srcset=""/>
                <p>Analysis Stage</p>
            </div>
            <div className="stage-6">
                <img src={ImprovementIcon} alt="Improvement stage" srcset=""/>
                <p>Continuous Improvement</p>
            </div>
        </div>
    )
}

export default Process
