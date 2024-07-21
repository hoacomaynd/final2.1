import { useState, useEffect } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import { PartList } from './components/PartList';
const total = {
	body: 17,
	eyes: 17,
	hair: 73,
	mouth: 24,
	eyebrows: 15,
	glasses: 17,
	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
    hats: 29,
    earrings:33,
    neckwear:19,
    facial_hair:18,
};

function App() {
	const [body, setBody] = useState(0);
	const [eyes, setEyes] = useState(2);
	const [eyebrows, setEyebrow] = useState(2);
	const [hair, setHair] = useState(0);
	const [clothing1, setClothing1] = useState(0);
	const [clothing2, setClothing2] = useState(0);
	const [clothing3, setClothing3] = useState(0);
	const [mouth, setMouth] = useState(2);
	const [glasses, setGlasses] = useState(2);
    const [earrings, setEarrings] = useState(2);
	const [hats, setHats] = useState(2);
	const [neckwear, setNeckwear] = useState(2);
    const [facial_hair, setFacial_hair] = useState(2);
    const defaultbtn = () =>{
        setBody(8);
        setEyes(4);
        setHair(15);
        setEyebrow(1);
        setClothing1(0);
        setClothing2(0);
        setClothing3(0);
        setGlasses(0);
        setHats(0);
        setEarrings(0);
        setNeckwear(0);
        setFacial_hair(0);
        setMouth(4);

    }
	const randomize = () => {
		setBody(Math.floor(Math.random() * total.body));
		setEyes(Math.floor(Math.random() * total.eyes));
		setEyebrow(Math.floor(Math.random() * total.eyebrows));
		setHair(Math.floor(Math.random() * total.hair));
		setMouth(Math.floor(Math.random() * total.mouth));
		setMouth(Math.floor(Math.random() * total.mouth));
		setGlasses(Math.floor(Math.random() * total.glasses));
		setEarrings(Math.floor(Math.random() * total.earrings));
		setHats(Math.floor(Math.random() * total.hats));
		setNeckwear(Math.floor(Math.random() * total.neckwear));
		setFacial_hair(Math.floor(Math.random() * total.facial_hair));
		setClothing1(Math.floor(Math.random() * total.clothing1));
		setClothing2(Math.floor(Math.random() * total.clothing2));
		setClothing3(Math.floor(Math.random() * total.clothing3));
	};
	useEffect(() => {
		randomize();
	}, []);
	return (
		<div className="App">
			<div className="title">CHARACTER</div>
			<div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
			<div className="divider"></div>
			<div className="avatar-group gap-30">
				<div>
					<div className="avatar-wrapper">
						<Avatar body={body} eyes={eyes} hair={hair} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} mouth={mouth} eyebrow={eyebrows} glasses={glasses} hats={hats} earrings={earrings} facial_hair={facial_hair} neckwear={neckwear} />
						<div className="text-center">
							<button className="button" onClick={() => randomize()}>
								Randomize!
							</button>
							<button className="button" onClick={() => defaultbtn()}>
								Default!
							</button>
						</div>
					</div>
				</div>
				<div>
					<div className="list-section">
						<h2>Body</h2>
						<PartList total={total.body} path="body" set={setBody} selected={body} />
					</div>
					<div className="list-section">
						<h2>Eyes</h2>
						<PartList total={total.eyes} path="eyes" set={setEyes} selected={eyes} zoom={2.5} top="35px" />
					</div>
					<div className="list-section">
						<h2>Hair</h2>
						<PartList total={total.hair} path="hair" set={setHair} selected={hair} />
					</div>
					<div className="list-section">
						<h2>Mouth</h2>
						<PartList total={total.mouth} path="mouths" set={setMouth} selected={mouth} zoom={2} />
					</div>
					<div className="list-section">
						<h2>Eyebrows</h2>
						<PartList total={total.eyebrows} path="eyebrows" set={setEyebrow} selected={eyebrows} />
					</div>
					<div className="list-section">
						<h2>Glasses</h2>
						<PartList total={total.glasses} path="accessories/glasses" set={setGlasses} selected={glasses} />
					</div>
					<div className="list-section">
						<h2>Clothing (L1)</h2>
						<PartList total={total.clothing1} path="clothes/layer_1" set={setClothing1} selected={clothing1} />
					</div>
					<div className="list-section">
						<h2>Clothing (L2)</h2>
						<PartList total={total.clothing2} path="clothes/layer_2" set={setClothing2} selected={clothing2} />
					</div>
					<div className="list-section">
						<h2>Clothing (L3)</h2>
						<PartList total={total.clothing3} path="clothes/layer_3" set={setClothing3} selected={clothing3} zoom={2} top="-15px" />
					</div>
                    <div className="list-section">
						<h2>Hat</h2>
						<PartList total={total.hats} path="accessories/hats" set={setHats} selected={hats} />
					</div>
                    <div className="list-section">
						<h2>Earrings</h2>
						<PartList total={total.earrings} path="accessories/earrings" set={setEarrings} selected={earrings} />
					</div>
                    <div className="list-section">
						<h2>Neckwear</h2>
						<PartList total={total.neckwear} path="accessories/neckwear" set={setNeckwear} selected={neckwear} />
					</div>
                    <div className="list-section">
						<h2>Facial_hair</h2>
						<PartList total={total.facial_hair} path="facial_hair" set={setFacial_hair} selected={facial_hair} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;