import './Quest.css';
import { Switch, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Quest({levelId, questId}) {
	console.log(levelId, questId);
	
	return (
		<motion.div
			className="quest"
			initial={{y: "100%"}}
			animate={{y: 0}}
			exit={{y: "-100%"}}
			variants={{type: "tween",duration: 0.5}}
		>
			<div className="quest__box">
				<p className="quest__question">{levelId}{ }{questId} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore?</p>
				<span className="quest__answer">
					<input type="text" placeholder="Type your answer here..." />
					<button>Submit Answer</button>
				</span>
			</div>
		</motion.div>
	);
}

export default Quest;
