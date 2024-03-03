import './ideaCreateMain.scss';
import pin from "../../shared/images/pin.svg";

function IdeaCreateMain(){
    return(
        <div className='ideaCreateMain'>
            <h1>Создать новую идею</h1>
            <form action="" method='post'>

                <label htmlFor="ideaTitle">Название идеи</label>
                <input type="text" id='ideaTitle' name='ideaTitle' placeholder='Введите название'/>

                <label htmlFor="ideaCategory">Категория идеи</label>
                <select name="ideaCategory" id='ideaCategory' defaultValue='default'>
                    <option value='default' disabled>Выберите категорию</option>
                    <option value="ideaCategory1">Категория 1</option>
                    <option value="ideaCategory2">Категория 2</option>
                    <option value="ideaCategory3">Категория 3</option>
                </select>

                <label htmlFor="ideaProblem">Проблема</label>
                <textarea name="ideaProblem" id="ideaProblem" cols="30" rows="10" placeholder='Опишите проблему'></textarea>

                <label htmlFor="ideaSolution">Решение</label>
                <textarea name="ideaSolution" id="ideaSolution" cols="30" rows="10" placeholder='Опишите решение'></textarea>

                <label htmlFor="ideaResult">Результат</label>
                <textarea name="ideaResult" id="ideaResult" cols="30" rows="10" placeholder='Опишите ожидаемый результат'></textarea>

                <label htmlFor="ideaFilial">Филиал</label>   
                <select name="ideaFilial" id='ideaFilial' defaultValue='default'>
                    <option value='default' disabled>Выберите филиал</option>
                    <option value="ideaFilial1">Красноярск</option>
                    <option value="ideaFilial2">Москва</option>
                    <option value="ideaFilial3">Петербург</option>
                </select>

                <label htmlFor="ideaAuthor">Автор</label>
                <input type="text" name='ideaAuthor' id='ideaAuthor' placeholder='Перечислите авторов' />

                <label htmlFor="ideaImg" className='pin'>
                    <img src={pin} alt="" />
                    Выберите обложку
                </label>
                <input type="file" name='ideaImg' id='ideaImg' accept="image/png, image/jpeg"/>

                <label htmlFor="ideaFiles" className='pin'>
                    <img src={pin} alt="" />
                    Прикрепить файлы
                </label>
                <input type="file" name='ideaFiles' id='ideaFiles' accept=".pdf, .doc, .docx" multiple />

                <button type='submit'>Создать</button>
            </form>
        </div>
    )
}

export default IdeaCreateMain;