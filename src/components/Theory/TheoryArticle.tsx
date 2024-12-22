import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { theoryContent } from '../../data/theory';

export function TheoryArticle() {
  const { topicId } = useParams();
  const content = theoryContent[topicId || ''];

  if (!content) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <p className="text-red-800 dark:text-red-200">Статья не найдена</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/theory"
        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Назад к темам</span>
      </Link>

      <article className="prose dark:prose-invert prose-blue max-w-none">
        <h1>{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
        
        {content.video && (
          <div className="my-8">
            <h2>Видео по теме</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={content.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        )}

        {content.examples && (
          <div className="mt-8">
            <h2>Примеры</h2>
            <div className="space-y-4">
              {content.examples.map((example, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <h3 className="font-medium mb-2">Пример {index + 1}</h3>
                  <div dangerouslySetInnerHTML={{ __html: example }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}