import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CityPortal = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'documents',
      title: 'Документы и справки',
      description: 'Получение справок, записей актов, оформление документов',
      icon: 'FileText',
      count: '12 услуг'
    },
    {
      id: 'payments',
      title: 'Платежи и налоги',
      description: 'Оплата коммунальных услуг, налогов, штрафов',
      icon: 'CreditCard',
      count: '8 услуг'
    },
    {
      id: 'healthcare',
      title: 'Здравоохранение',
      description: 'Запись к врачу, получение медицинских справок',
      icon: 'Heart',
      count: '15 услуг'
    },
    {
      id: 'education',
      title: 'Образование',
      description: 'Зачисление в детский сад, школу, дополнительное образование',
      icon: 'GraduationCap',
      count: '6 услуг'
    },
    {
      id: 'transport',
      title: 'Транспорт',
      description: 'Парковочные разрешения, транспортные льготы',
      icon: 'Car',
      count: '4 услуги'
    },
    {
      id: 'social',
      title: 'Социальная поддержка',
      description: 'Льготы, пособия, социальные выплаты',
      icon: 'Users',
      count: '10 услуг'
    }
  ];

  const news = [
    {
      date: '21 сентября 2025',
      title: 'Открытие нового медицинского центра',
      description: 'В микрорайоне Северный открылся современный медицинский центр с новейшим оборудованием'
    },
    {
      date: '20 сентября 2025',
      title: 'Благоустройство парка "Центральный"',
      description: 'Завершены работы по благоустройству главного городского парка'
    },
    {
      date: '19 сентября 2025',
      title: 'Запуск онлайн-записи в детские сады',
      description: 'Теперь можно подать заявление на зачисление ребёнка в детский сад через портал'
    }
  ];

  const stats = [
    { number: '156,000', label: 'Жителей города' },
    { number: '89%', label: 'Услуг доступно онлайн' },
    { number: '24/7', label: 'Работа портала' },
    { number: '2.5 мин', label: 'Среднее время получения услуги' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ГосПортал</h1>
                <p className="text-sm text-gray-600">Ваш город</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Городские услуги
            <span className="text-blue-600"> онлайн</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Получайте справки, оплачивайте услуги, записывайтесь к врачу и решайте любые вопросы 
            не выходя из дома. Быстро, удобно, безопасно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Search" size={20} className="mr-2" />
              Найти услугу
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные услуги</h2>
            <p className="text-lg text-gray-600">Более 55 государственных услуг доступны онлайн</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      activeService === service.id ? 'bg-blue-600' : 'bg-blue-100'
                    }`}>
                      <Icon 
                        name={service.icon as any} 
                        size={24} 
                        className={activeService === service.id ? 'text-white' : 'text-blue-600'} 
                      />
                    </div>
                    <span className="text-sm text-gray-500">{service.count}</span>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Новости и объявления</h2>
            <p className="text-lg text-gray-600">Актуальная информация о жизни города</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-blue-600 mb-2">{item.date}</div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                  <Button variant="link" className="p-0 mt-3 text-blue-600">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Начните пользоваться порталом уже сегодня
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Зарегистрируйтесь и получите доступ ко всем государственным услугам онлайн
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="UserPlus" size={20} className="mr-2" />
            Зарегистрироваться
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-white" />
                </div>
                <span className="font-bold">ГосПортал</span>
              </div>
              <p className="text-gray-400 text-sm">
                Официальный портал государственных услуг вашего города
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Документы</a></li>
                <li><a href="#" className="hover:text-white">Здравоохранение</a></li>
                <li><a href="#" className="hover:text-white">Образование</a></li>
                <li><a href="#" className="hover:text-white">Социальные выплаты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Помощь</a></li>
                <li><a href="#" className="hover:text-white">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:text-white">Обратная связь</a></li>
                <li><a href="#" className="hover:text-white">Техподдержка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  8 (800) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@city-portal.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  ул. Центральная, 1
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 ГосПортал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CityPortal;