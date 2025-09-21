import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const CityPortal = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Building',
      title: 'Управление и администрация',
      description: 'Документооборот, заявления, справки'
    },
    {
      icon: 'Users',
      title: 'Социальные службы',
      description: 'Поддержка семей, льготы, пособия'
    },
    {
      icon: 'Phone',
      title: 'Экстренные службы',
      description: 'Контакты служб быстрого реагирования'
    },
    {
      icon: 'MapPin',
      title: 'Городская инфраструктура',
      description: 'Транспорт, дороги, коммунальные услуги'
    }
  ];

  const mapPoints = [
    { id: 1, name: 'Администрация города', type: 'government', x: 35, y: 40 },
    { id: 2, name: 'Больница', type: 'healthcare', x: 60, y: 25 },
    { id: 3, name: 'Школа №1', type: 'education', x: 25, y: 60 },
    { id: 4, name: 'Парк культуры', type: 'recreation', x: 70, y: 70 },
    { id: 5, name: 'МФЦ', type: 'services', x: 45, y: 55 }
  ];

  const getPointColor = (type: string) => {
    switch (type) {
      case 'government': return 'bg-blue-500';
      case 'healthcare': return 'bg-red-500';
      case 'education': return 'bg-green-500';
      case 'recreation': return 'bg-purple-500';
      case 'services': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Building" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Городской портал</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'home' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'services' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'contacts' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Добро пожаловать в городской портал
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Единое окно для получения городских услуг и информации. 
                Быстро, удобно, круглосуточно.
              </p>
            </div>

            {/* Interactive Map */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Интерактивная карта города
              </h3>
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                  <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 overflow-hidden">
                    {/* Map Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                        <path d="M20,20 L80,20 M20,40 L80,40 M20,60 L80,60 M20,80 L80,80" stroke="#94a3b8" strokeWidth="0.3"/>
                        <path d="M20,20 L20,80 M40,20 L40,80 M60,20 L60,80 M80,20 L80,80" stroke="#94a3b8" strokeWidth="0.3"/>
                      </svg>
                    </div>
                    
                    {/* Map Points */}
                    {mapPoints.map((point) => (
                      <div
                        key={point.id}
                        className={`absolute w-4 h-4 ${getPointColor(point.type)} rounded-full shadow-lg cursor-pointer transform -translate-x-2 -translate-y-2 hover:scale-125 transition-transform group`}
                        style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        title={point.name}
                      >
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {point.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Map Legend */}
                  <div className="flex flex-wrap gap-4 mt-4 justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Администрация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Медицина</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Образование</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Отдых</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Услуги</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Services */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Популярные услуги
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon name={service.icon as any} size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Городские услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={24} className="text-white" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Контакты</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>Свяжитесь с нами любым удобным способом</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-blue-600" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-blue-600" />
                    <span>info@gorod.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-blue-600" />
                    <span>ул. Центральная, 1, г. Город</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-blue-600" />
                    <span>Пн-Пт: 9:00-18:00, Сб: 9:00-15:00</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Обратная связь</CardTitle>
                  <CardDescription>Отправьте нам сообщение и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Сообщение</label>
                    <Textarea placeholder="Опишите вашу ситуацию..." rows={4} />
                  </div>
                  <Button className="w-full">Отправить сообщение</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CityPortal;