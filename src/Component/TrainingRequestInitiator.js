import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TrainingRequestInitiator.css';

export default function TrainingRequestInitiator() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="form-container">
      <h2>Training Request Initiator Section</h2>
      <form>
        <div>
          <label>Training Title :</label><br />
          <input type="text" name="training_title" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Training Type :</label><br />
          <select name="training_type" required>
            <option value="">Select option</option>
            <option value="1">FRW ( Future Ready WorkForce )</option>
            <option value="2">DRWF ( Digital ready Workforce )</option>
            <option value="3">On Demand</option>
            <option value="4">Project Specific</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Resource Type :</label><br />
          <select name="resource_type" required>
            <option value="">Select option</option>
            <option value="1">Fresher</option>
            <option value="2">Lateral</option>
            <option value="3">CDAC</option>
            <option value="4">Interns</option>
            <option value="5">On Bench</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Duration ( In Days ) :</label><br />
          <input type="number" name="duration" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Purpose Of Training :</label><br />
          <textarea name="purpose" required></textarea>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Training Start Date:</label><br />
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Training End Date:</label><br />
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Initiated From :</label><br />
          <input type="text" name="initiated_from" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Project Name (In Case Of Project Specific) :</label><br />
          <input type="text" name="project_name" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Skills To Be Imparted :</label><br />
          <textarea name="skills" required></textarea>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>No. Of Participants :</label><br />
          <input type="number" name="participants" required />
        </div>
        <br /> {/*Line Space*/}
        <div>
          <button id="sub_btn" type="submit">SUBMIT</button>
        </div>
        <br /> {/*Line Space*/}
        <div>
          <button id="sub_btn" type="button">NEXT</button>
        </div>
        <br /> {/*Line Space*/}
        <div>
          <button id="sub_btn" type="button">UPLOAD</button>
        </div>
      </form>
    </div>
  );
}
