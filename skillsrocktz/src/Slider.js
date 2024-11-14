import React, { useState, useEffect } from "react";
import './Slider.css'
import './ToDo.css'

function Slider() {
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Функция для загрузки случайных пользователей
    const fetchRandomImages = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=20');
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            const data = await response.json();
            setSlides(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // используем функцию fetchRandomUsers() при монтировании компонента
    useEffect(() => {
        // устанавливаем интервал
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 3000);
        // очищаем интервал при размонтировании компонента
        return() => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        fetchRandomImages();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to upload users: {error}</p>;
    }

    // Функция для переключения слайдов назад
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    // Функция для переключения слайдов вперед
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    };

    return (
        <div className="slider">
            <button className="todo__task_btn" onClick={prevSlide}>Prev Slide</button>
            <div className="slider__group">
                {slides.length > 0 && (
                    <img className="slider__img" src={slides[currentSlide].picture.large} alt={`${slides[currentSlide].name.first}`} />
                )}
            </div>
            <button className="todo__task_btn" onClick={nextSlide}>Next Slide</button>
        </div>

    )
}

export default Slider;