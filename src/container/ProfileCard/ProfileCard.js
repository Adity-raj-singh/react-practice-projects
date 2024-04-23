import './ProfileCard.css';

export default function ProfileCard() {
    return (
        <div id="card-wrapper">
            <div><Image /></div>
            <div><Intro /></div>
            <div>
                <Skill skill="HTML&CSS" color="blue" emoji="💪" />
                <Skill skill="Javascript" color="orange" emoji="💪" />
                <Skill skill="React" color="yellow" emoji="💪" />
                <Skill skill="NodeJs" color="orangered" emoji="👶" />
            </div>
        </div>
    )
}

function Image() {
    return (
        <div>
            <img style={{ width: '100%', height: '300px' }}
                src="data:image/jpeg;base64,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"
                alt="jonas image"
            />
        </div>
    )
}

function Intro() {
    return (
        <div>
            <h1>Jonas Schmedtmann</h1>
            <p style={{ textAlign: 'left', transform: 'translate(50px, 0px)' }}>Full-stack web developer and teacher at <br />Udemy. When not coding or preparing a <br />course, I like to play board games, to <br />cook (and eat), or to just enjoy the <br />Portuguese sun at the beach.</p>
        </div>
    )
}

function Skill(props) {
    return (
        <div style={{ backgroundColor: props.color, display: 'inline-block', width: '35%', borderRadius: '5px', padding: '5px', margin: '5px 5px 12px 5px' }}>
            <span>{props.skill}<span style={{ marginLeft: '5px' }}>{props.emoji}</span></span>
        </div>
    )
}