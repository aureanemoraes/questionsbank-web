import React, {useState, useEffect, useCallback, useRef, FormEvent} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import TeacherLayout from '../../components/TeacherLayout';
import Input from '../../components/Input';
import Select from '../../components/Select';

import Button from '../../components/Button';
import * as Yup from 'yup';
import InputValidation from '../../helpers/InputValidation';
import {Container} from './styles';
//import Select from 'react-select';
import api from '../../services/api';
import {useAuth} from '../../hooks/AuthContext';
import {useToast} from '../../hooks/ToastContext';


interface OptionFormat {
  label: string;
  value: number | string;
}

const NewQuestion: React.FC = () => {
  const {token} = useAuth();
  const [answerTypes, setAnswerTypes] = useState<OptionFormat[]>([]);
  const [questionLevels, setQuestionLevels] = useState<OptionFormat[]>([]);
  const [gradesName, setGradesName] = useState<OptionFormat[]>([]);
  const [selectedGrade, setSelectedGrade] = useState(false);
  const [subjects, setSubjects] = useState<OptionFormat[]>([]);
  const [selectedSubject, setSelectedSubject] = useState(false);
  const [topics, setTopics] = useState<OptionFormat[]>([]);
  const formRef = useRef<FormHandles>(null);
  const {addToast} = useToast();
  

  const handleLoadedData = useCallback((data) => {
    const loadedData : OptionFormat[] = [];
    data.map((data: any) => loadedData.push(
      {value: data.id, label: data.name}
    ));
    return loadedData;
  }, []);

  useEffect(() => {
    api.get('/answertypes/options', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then( (response) => {
      setAnswerTypes(handleLoadedData(response.data.data));
    });
    
    api.get('/questionlevels/options', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then( (response) => {
      setQuestionLevels(handleLoadedData(response.data.data));
    });

    api.get('/grades/options', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then( (response) => {
      const data = response.data.data;
      const loadedData : OptionFormat[] = [];
      data.map((data: any) => loadedData.push(
        {
          value: data.id, 
          label: `${data.name} - ${data.year} série/ano`
        }
      ));

      setGradesName(loadedData);
    });

  }, [handleLoadedData, token]);

  const handleGradeChange = useCallback(async (e: any) => {
    if(e.value) {
      const response = await api.get(`/subjects/options/${e.value}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setSelectedGrade(true);
      setSubjects(handleLoadedData(response.data));

    } else {
      setSelectedGrade(false);
      setSubjects([]);
    }
  }, [handleLoadedData, token]);

  const handleSubjectChange = useCallback(async (e: any) => {
    if(e) {

      const response = await api.get(`/topics/options/${e.value}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSelectedSubject(true);
      setTopics(handleLoadedData(response.data));
    } else {
      setSelectedSubject(false);
      setTopics([]);
    }
  }, [handleLoadedData, token]);

  const handleSubmit = useCallback(async (data: Object) => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
          title: Yup.string().required('Este campo precisa ser preenchido.'),
          answer_type_id: Yup.string()
                          .required('Este campo precisa ser preenchido.'),
          question_level_id: Yup.string()
                            .required('Este campo precisa ser preenchido.'),
          grade_id: Yup.string()
                            .required('Este campo precisa ser preenchido.'),
          subject_id: Yup.string()
                            .required('Este campo precisa ser preenchido.'),
          topics_id: Yup.string()
          .required('Este campo precisa ser preenchido.')
      });
      
      await schema.validate(data, {
          abortEarly: false
      });

  } catch(err) {
      if(err instanceof Yup.ValidationError) {
          const errors = InputValidation(err);
          console.log(errors);
          formRef.current?.setErrors(errors);
      } else {
          addToast({
              type: 'error',
              title: 'Falha no cadastro',
              description: 'Verifique seus dados e tente novamente.'
          });
      }
  }
  }, [addToast]);

  return (
    <TeacherLayout>
      <Container>
        <h1>Nova Questão</h1>
        
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="title" placeholder="Título *"/>
          <Input name="description" placeholder="Descrição"/>
          
          <Select
            isMulti={false}
            name="answer_type_id"
            options={answerTypes}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Tipo da resposta...*"
          />

          <Select
            isMulti={false}
            name="question_level_id"
            options={questionLevels}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Nível de dificuldade...*"
          />

          <Select
            isMulti={false}
            name="grade_id"
            options={gradesName}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Grade...*"
            onChange={handleGradeChange}
          />
          
          <Select
          name="subject_id"
            isClearable={true}
            isDisabled={!selectedGrade && true}
            isMulti={false}
            options={subjects}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Matérias...*"
            onChange={handleSubjectChange}
            noOptionsMessage={() => 'Não há matérias disponíveis.'}
            isOptionDisabled={() => !subjects && true}

          />

          <Select
            isDisabled={!selectedSubject && true}
            isMulti={true}
            name="topics_id"
            options={topics}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder={'Assunto...*'}
            noOptionsMessage={() => 'Não há matérias disponíveis.'} 
          />

          
          <Button type="submit">Criar</Button>
        </Form>
      </Container>
    </TeacherLayout>
    
  );
}

export default NewQuestion;