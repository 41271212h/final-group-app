import React, { useState } from 'react';
import './FitnessSuggestions.css';

const fitnessSuggestions = {
  Arms: [
    { name: 'Bicep Curls', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' }, 
    { name: 'Tricep Dips', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=6kALZikXxLc' },
    { name: 'Push-ups', sets: 3, reps: 20, link: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8' },
    { name: 'Dumbbell Shoulder Press', sets: 4, reps: 10, link: 'https://www.youtube.com/watch?v=B-aVuyhvLHU' },
    { name: 'Chin-ups', sets: 3, reps: 8, link: 'https://www.youtube.com/watch?v=bpbOEhWDbNw' },
    { name: 'Hammer Curls', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=TwD-YGVP4Bk' },
    { name: 'Overhead Tricep Extension', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=nRiJVZDpdL0' },
    { name: 'Cable Tricep Pushdown', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=2-LAMcpzODU' },
    { name: 'Concentration Curls', sets: 3, reps: 10, link: 'https://www.youtube.com/watch?v=soxrZlIl35U' },
    { name: 'Close-Grip Bench Press', sets: 4, reps: 8, link: 'https://www.youtube.com/watch?v=nr2tjdywNPg' },
  ],
  Abs: [
    { name: 'Crunches', sets: 3, reps: 20, link: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU' },
    { name: 'Plank', sets: 3, time: '1 min', link: 'https://www.youtube.com/watch?v=pSHjTRCQxIw' },
    { name: 'Russian Twists', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=wkD8rjkodUI' },
    { name: 'Leg Raises', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=JB2oyawG9KI' },
    { name: 'Mountain Climbers', sets: 3, time: '1 min', link: 'https://www.youtube.com/watch?v=nmwgirgXLYM' },
    { name: 'Bicycle Crunches', sets: 3, reps: 20, link: 'https://www.youtube.com/watch?v=9FGilxCbdz8' },
    { name: 'Hanging Leg Raises', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=JB2oyawG9KI' },
    { name: 'Side Plank', sets: 3, time: '45 sec each side', link: 'https://www.youtube.com/watch?v=_rdfjFSFKMY' },
    { name: 'Toe Touches', sets: 3, reps: 20, link: 'https://www.youtube.com/watch?v=8QXcOQEsxNc' },
    { name: 'Reverse Crunches', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=hyv14e2QDq0' },
  ],
  Legs: [
    { name: 'Squats', sets: 4, reps: 12, link: 'https://www.youtube.com/watch?v=aclHkVaku9U' },
    { name: 'Lunges', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=COKYKgQ8KR0' },
    { name: 'Deadlifts', sets: 4, reps: 10, link: 'https://www.youtube.com/watch?v=ytGaGIn3SjE' },
    { name: 'Leg Press', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=sO4C5_-nzWo' },
    { name: 'Calf Raises', sets: 4, reps: 15, link: 'https://www.youtube.com/watch?v=-M4-G8p8fmc' },
    { name: 'Leg Extensions', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=YyvSfVjQeL0' },
    { name: 'Leg Curls', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=jUAZ1yxR1wM' },
    { name: 'Bulgarian Split Squats', sets: 3, reps: 10, link: 'https://www.youtube.com/watch?v=2C-uNgKwPLE' },
    { name: 'Step-Ups', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=VzUS2FVsk7Y' },
    { name: 'Goblet Squats', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
  ],
  Chest: [
    { name: 'Bench Press', sets: 4, reps: 8, link: 'https://www.youtube.com/watch?v=gRVjAtPip0Y' },
    { name: 'Chest Fly', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=eozdVDA78K0' },
    { name: 'Push-ups', sets: 3, reps: 20, link: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8' },
    { name: 'Incline Dumbbell Press', sets: 4, reps: 10, link: 'https://www.youtube.com/watch?v=8iPEnn-ltC8' },
    { name: 'Cable Crossovers', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=q1cKTmaeQWo' },
    { name: 'Decline Bench Press', sets: 4, reps: 8, link: 'https://www.youtube.com/watch?v=B5u7vsHjsoA' },
    { name: 'Chest Dips', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=2z8JmcrW-As' },
    { name: 'Pec Deck Machine', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=FfyRhzlD4hc' },
    { name: 'Incline Push-ups', sets: 3, reps: 20, link: 'https://www.youtube.com/watch?v=KFe2sfCJE9A' },
    { name: 'Dumbbell Pullover', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=sJMrbBsCmj0' },
  ],
  Back: [
    { name: 'Pull-ups', sets: 3, reps: 10, link: 'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
    { name: 'Bent Over Rows', sets: 4, reps: 10, link: 'https://www.youtube.com/watch?v=IxoFThNAUc8' },
    { name: 'Deadlifts', sets: 4, reps: 8, link: 'https://www.youtube.com/watch?v=ytGaGIn3SjE' },
    { name: 'Lat Pulldowns', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=CAwf7n6Luuc' },
    { name: 'Seated Rows', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=GZbfZ033f74' },
    { name: 'Single-Arm Dumbbell Row', sets: 3, reps: 12, link: 'https://www.youtube.com/watch?v=KA8v5bTo2zs' },
    { name: 'Face Pulls', sets: 3, reps: 15, link: 'https://www.youtube.com/watch?v=rep-qVO' },
    { name: 'T-Bar Rows', sets: 3, reps: 10, link: 'https://youtu.be/yPis7nlbqdY?si=noBF1LEXPkYx-ifh' },
    { name: 'Good Mornings', sets: 3, reps: 12, link: 'https://youtu.be/dEJ0FTm-CEk?si=1Qf5NarGpxPLf16i' },
    { name: 'Superman Exercise', sets: 3, time: '30 sec', link: 'https://youtu.be/h2iKcNldw-g?si=XVh1ZBWN1f-4qAoK' },
  ],
  Cardio: [
    { name: 'Running', time: '30 mins' },
    { name: 'Cycling', time: '30 mins' },
    { name: 'Jump Rope', time: '10 mins' },
    { name: 'Burpees', sets: 3, reps: 20 },
    { name: 'High-Intensity Interval Training (HIIT)', time: '20 mins' },
    { name: 'Rowing', time: '20 mins' },
    { name: 'Stair Climber', time: '15 mins' },
    { name: 'Elliptical', time: '30 mins' },
    { name: 'Swimming', time: '30 mins' },
    { name: 'Kickboxing', time: '20 mins' },
  ],
};

function FitnessSuggestions() {
  const [selectedPart, setSelectedPart] = useState('');
  const [randomSuggestion, setRandomSuggestion] = useState(null);

  const generateRandomSuggestion = () => {
    if (!selectedPart) {
      alert('Please select a body part.');
      return;
    }
    const exercises = fitnessSuggestions[selectedPart];
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    setRandomSuggestion(randomExercise);
  };

  const clearSelection = () => {
    setSelectedPart('');
    setRandomSuggestion(null);
  };

  return (
    <div className="fitness-suggestions">
      <h1>Fitness Suggestions</h1>
      <div>
        <label htmlFor="body-part-select">Choose a body part:</label>
        <select
          id="body-part-select"
          value={selectedPart}
          onChange={(e) => setSelectedPart(e.target.value)}
        >
          <option value="">Select a body part</option>
          {Object.keys(fitnessSuggestions).map((part) => (
            <option key={part} value={part}>{part}</option>
          ))}
        </select>
      </div>

      <button onClick={generateRandomSuggestion}>Generate Random Exercise</button>

      {randomSuggestion && (
        <div className="suggestion-display">
          <h2>{randomSuggestion.name}</h2>
          <p>Sets: {randomSuggestion.sets || 'N/A'}</p>
          <p>Reps: {randomSuggestion.reps || 'N/A'}</p>
          <p>Time: {randomSuggestion.time || 'N/A'}</p>
          {randomSuggestion.link && (
            <p>
              <a href={randomSuggestion.link} target="_blank" rel="noopener noreferrer">
                Watch Tutorial
                </a>
            </p>
          )}

          <div className="button-container">
            <button onClick={clearSelection}>Clear</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FitnessSuggestions;
