import React,{useState} from 'react'
import {CopyBlock, dracula} from 'react-code-blocks'
import {sample, TopBar} from './components'
import './Recuperacion.css'

export default function Recuperacion() {

  const [language, changeLanguage] = useState("Ejercicio1");
  const [languageDemo, changeDemo] = useState(sample["Ejercicio1"]);

  return (
    <div className="contenedorRecp">

      <TopBar
        language={{
          value: language,
          onChange: e => {
            changeDemo(sample[e.target.value]);
            return changeLanguage(e.target.value);
          },
          options: Object.keys(sample).map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))
        }}
        />
        <div className="demo">
          <CopyBlock
            language={language}
            text={languageDemo}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
    </div>
  )
}
