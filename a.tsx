<Select
            isMulti={false}
            name="colors"
            options={answerTypes}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Tipo da resposta...*"
          />

          <Select
            isMulti={false}
            name="colors"
            options={questionLevels}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Nível de dificuldade...*"
          />

          <Select
            isMulti={false}
            name="colors"
            options={gradesName}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Grade...*"
            onChange={handleGradeChange}
          />
          
          <Select
            isClearable={true}
            isDisabled={!selectedGrade && true}
            isMulti={false}
            name="colors"
            options={subjects}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Matérias...*"
            onChange={handleSubjectChange}
            noOptionsMessage={() => 'Não há matérias disponíveis.'}

          />

          <select name="colors" placeholder="Grade...*">
            {gradesName.map(
              (grade) => (<option value={grade.value}>{grade.label}</option>)
            )}
          </select>

          <input id="country" name="country" required list="country-list"
            pattern="Italy|France" title="Please select a country" placeholder="aaaaaaaaaaaa"/>
          <datalist id="country-list">
            <option value="Italy"></option>
            <option value="France"></option>
          </datalist>

          <Select
            isDisabled={!selectedSubject && true}
            isMulti={false}
            name="colors"
            options={topics}
            className="basic-multi-select"
            classNamePrefix="select"
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            placeholder={() => {!selectedSubject ? 'a' : 'asd'}}
            noOptionsMessage={(e) => e.inputValue = ''}  
                    
          />