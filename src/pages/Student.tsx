import React, { useEffect, useState } from 'react'
import * as C from 'allFiles';
import '../style/pages-style/Student.scss'
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

const Student = () => {
    const [students, setStudents] = useState([{
        id: 0,
        title: '',
        enroll: 0
    }]);
    const [allDate] = useState([2021]);
    const [isLoad, setIsLoad] = useState(false);
    const nowDate = new Date();

    useEffect(() => {
        for (let date = 2022; date <= nowDate.getFullYear(); date++) {
            allDate.push(date)
        }
        axios.get('/docs/student')
            .then((res) => {
                setStudents(res.data);
            })
            .catch((err) => {
                if (err instanceof AxiosError) {
                    console.log(err);
                    // alert('오류가 발생하여 문서를 불러올 수 없습니다.');
                }
            })
            .finally(() => {
                setIsLoad(true)
            })
    }, []);

    return (
        <div>
            <C.Header />
            <div className="student-board-wrap">
                <C.Board>
                    <div className="doc-title-box">
                        <span>부마위키:학생</span>
                    </div>
                    <div className="classif-box">
                        <C.Classify>학생</C.Classify>
                    </div>
                    <div className="line" />
                    {isLoad ? <>{allDate.map((date, index) => (
                        <div className='summary-wrap' key={index}>
                            <C.AccodianMenu name={`${date}학년도 입학생`}>
                                <ul className="student-list">
                                    {students.map((student, index) => (<>
                                        {student.enroll === date ?
                                            <li><Link to={`/docs/${student.id}`} className='link'>{student.title}</Link></li> : ''}
                                    </>))}
                                </ul>
                            </C.AccodianMenu>
                        </div>
                    ))}</> : ''}
                    <C.SubFooter />
                </C.Board>
                <C.ScrollBtn />
                <C.Aside />
            </div>
            <C.Footer />
        </div>
    );
};

export default Student;