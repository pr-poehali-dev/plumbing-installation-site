import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    serviceType: '',
    area: '',
    material: '',
    complexity: ''
  });

  const [totalCost, setTotalCost] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: 'Droplets',
      title: 'Установка сантехники',
      description: 'Монтаж раковин, унитазов, ванн и душевых кабин'
    },
    {
      icon: 'Pipe',
      title: 'Замена труб',
      description: 'Полная замена водопроводных и канализационных систем'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт систем',
      description: 'Устранение протечек и неисправностей'
    },
    {
      icon: 'Flame',
      title: 'Отопление',
      description: 'Монтаж и обслуживание систем отопления'
    },
    {
      icon: 'Gauge',
      title: 'Установка счётчиков',
      description: 'Монтаж приборов учёта воды'
    },
    {
      icon: 'ShowerHead',
      title: 'Водоснабжение',
      description: 'Проектирование и монтаж систем водоснабжения'
    }
  ];

  const calculateCost = () => {
    let baseCost = 0;
    
    switch (calculatorData.serviceType) {
      case 'plumbing':
        baseCost = 5000;
        break;
      case 'pipes':
        baseCost = 15000;
        break;
      case 'repair':
        baseCost = 3000;
        break;
      case 'heating':
        baseCost = 20000;
        break;
      case 'meters':
        baseCost = 2000;
        break;
      case 'water':
        baseCost = 25000;
        break;
      default:
        baseCost = 0;
    }

    const area = parseFloat(calculatorData.area) || 0;
    const areaMultiplier = area > 0 ? area / 10 : 1;

    const materialMultiplier = calculatorData.material === 'premium' ? 1.5 : 
                               calculatorData.material === 'standard' ? 1.2 : 1;

    const complexityMultiplier = calculatorData.complexity === 'high' ? 1.8 :
                                 calculatorData.complexity === 'medium' ? 1.4 : 1;

    const total = baseCost * areaMultiplier * materialMultiplier * complexityMultiplier;
    setTotalCost(Math.round(total));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={32} className="text-primary" />
            <span className="text-2xl font-bold">СантехМонтаж</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#price" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="hidden md:block">
            <Button>
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <a 
                  href="#hero" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </a>
                <a 
                  href="#services" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#calculator" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Калькулятор
                </a>
                <a 
                  href="#price" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Прайс
                </a>
                <a 
                  href="#about" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a 
                  href="#portfolio" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Работы
                </a>
                <a 
                  href="#contacts" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                  <Icon name="Phone" size={18} className="mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональный монтаж сантехнических систем
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественные работы любой сложности. Гарантия 3 года. Опыт более 15 лет.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <Icon name="Wrench" size={200} className="text-primary/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-4">
                  <Icon name="Award" size={40} className="text-primary" />
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Выполненных проектов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр сантехнических работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
                <CardHeader>
                  <Icon name={service.icon} size={48} className="text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">Рассчитайте примерную стоимость работ онлайн</p>
          </div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Параметры проекта</CardTitle>
              <CardDescription>Заполните данные для расчёта стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Тип услуги</Label>
                  <Select 
                    value={calculatorData.serviceType}
                    onValueChange={(value) => setCalculatorData({...calculatorData, serviceType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Установка сантехники</SelectItem>
                      <SelectItem value="pipes">Замена труб</SelectItem>
                      <SelectItem value="repair">Ремонт систем</SelectItem>
                      <SelectItem value="heating">Отопление</SelectItem>
                      <SelectItem value="meters">Установка счётчиков</SelectItem>
                      <SelectItem value="water">Водоснабжение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Площадь помещения (м²)</Label>
                  <Input 
                    type="number" 
                    placeholder="Например: 50"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Класс материалов</Label>
                  <Select
                    value={calculatorData.material}
                    onValueChange={(value) => setCalculatorData({...calculatorData, material: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите класс" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Эконом</SelectItem>
                      <SelectItem value="standard">Стандарт</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Сложность работ</Label>
                  <Select
                    value={calculatorData.complexity}
                    onValueChange={(value) => setCalculatorData({...calculatorData, complexity: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите сложность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Низкая</SelectItem>
                      <SelectItem value="medium">Средняя</SelectItem>
                      <SelectItem value="high">Высокая</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Примерная стоимость:</div>
                  <div className="text-4xl font-bold text-primary">{totalCost.toLocaleString('ru-RU')} ₽</div>
                </div>
                <Button size="lg" onClick={calculateCost}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                * Итоговая стоимость может отличаться в зависимости от специфики объекта
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Базовые цены на популярные услуги</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Цены на сантехнические работы</CardTitle>
                <CardDescription>Актуальный прайс-лист для г. Прокопьевск</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Droplets" className="text-primary" size={20} />
                      Установка сантехники
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Установка унитаза</span><span className="font-semibold">от 1 800 ₽</span></div>
                      <div className="flex justify-between"><span>Монтаж раковины с тумбой</span><span className="font-semibold">от 2 500 ₽</span></div>
                      <div className="flex justify-between"><span>Установка ванны акриловой</span><span className="font-semibold">от 4 500 ₽</span></div>
                      <div className="flex justify-between"><span>Установка ванны чугунной</span><span className="font-semibold">от 5 500 ₽</span></div>
                      <div className="flex justify-between"><span>Монтаж душевой кабины</span><span className="font-semibold">от 6 000 ₽</span></div>
                      <div className="flex justify-between"><span>Установка биде</span><span className="font-semibold">от 1 500 ₽</span></div>
                      <div className="flex justify-between"><span>Монтаж смесителя</span><span className="font-semibold">от 800 ₽</span></div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Pipe" className="text-primary" size={20} />
                      Трубы и водоснабжение
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Замена труб водоснабжения (1 м)</span><span className="font-semibold">от 750 ₽</span></div>
                      <div className="flex justify-between"><span>Замена канализационных труб (1 м)</span><span className="font-semibold">от 650 ₽</span></div>
                      <div className="flex justify-between"><span>Монтаж стояков (1 м)</span><span className="font-semibold">от 1 200 ₽</span></div>
                      <div className="flex justify-between"><span>Установка фильтра грубой очистки</span><span className="font-semibold">от 900 ₽</span></div>
                      <div className="flex justify-between"><span>Установка редуктора давления</span><span className="font-semibold">от 1 100 ₽</span></div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Flame" className="text-primary" size={20} />
                      Отопление
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Установка радиатора отопления</span><span className="font-semibold">от 3 500 ₽</span></div>
                      <div className="flex justify-between"><span>Замена радиатора</span><span className="font-semibold">от 2 800 ₽</span></div>
                      <div className="flex justify-between"><span>Монтаж полотенцесушителя</span><span className="font-semibold">от 2 500 ₽</span></div>
                      <div className="flex justify-between"><span>Установка терморегулятора</span><span className="font-semibold">от 800 ₽</span></div>
                      <div className="flex justify-between"><span>Опрессовка системы отопления</span><span className="font-semibold">от 1 500 ₽</span></div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Gauge" className="text-primary" size={20} />
                      Счётчики и приборы учёта
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Установка счётчика воды</span><span className="font-semibold">от 1 400 ₽</span></div>
                      <div className="flex justify-between"><span>Замена счётчика воды</span><span className="font-semibold">от 1 200 ₽</span></div>
                      <div className="flex justify-between"><span>Поверка счётчика на месте</span><span className="font-semibold">от 800 ₽</span></div>
                    </div>
                  </div>

                  <div className="pb-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Wrench" className="text-primary" size={20} />
                      Дополнительные работы
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Устранение засора механическим способом</span><span className="font-semibold">от 1 500 ₽</span></div>
                      <div className="flex justify-between"><span>Устранение течи крана</span><span className="font-semibold">от 600 ₽</span></div>
                      <div className="flex justify-between"><span>Замена гибкой подводки</span><span className="font-semibold">от 400 ₽</span></div>
                      <div className="flex justify-between"><span>Штробление стен под трубы (1 м)</span><span className="font-semibold">от 500 ₽</span></div>
                      <div className="flex justify-between"><span>Выезд мастера</span><span className="font-semibold">Бесплатно</span></div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      * Цены указаны без стоимости материалов. Окончательная стоимость рассчитывается после осмотра объекта.
                      Минимальная стоимость выезда при заказе работ до 2000 ₽ составляет 500 ₽.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold mb-2">15+</CardTitle>
                <CardDescription>лет опыта работы</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold mb-2">500+</CardTitle>
                <CardDescription>довольных клиентов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="ThumbsUp" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold mb-2">100%</CardTitle>
                <CardDescription>гарантия качества</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Card className="mt-8">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Наша компания специализируется на профессиональном монтаже и обслуживании сантехнических систем. 
                Мы работаем с жилыми и коммерческими объектами любой сложности. Все наши специалисты имеют 
                профильное образование и регулярно проходят обучение новым технологиям. Используем только 
                качественные материалы и современное оборудование. Предоставляем гарантию на все виды работ.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/04118fb9-c652-434c-8b31-018ad6efa428/files/3d24a583-3e46-4ba4-a679-f2f8b611df59.jpg" 
                  alt="Установка сантехники"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Монтаж сантехники</CardTitle>
                <CardDescription>Комплексная установка в новой квартире</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/04118fb9-c652-434c-8b31-018ad6efa428/files/3a713af4-f444-4442-9b48-fa59cc785841.jpg" 
                  alt="Установка радиаторов"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Система отопления</CardTitle>
                <CardDescription>Монтаж радиаторов в частном доме</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/04118fb9-c652-434c-8b31-018ad6efa428/files/920c9479-7e65-4cbf-ab0f-39a56e183cb9.jpg" 
                  alt="Душевая кабина"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Душевая кабина</CardTitle>
                <CardDescription>Полная установка с плиткой</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@santeh-trendplus.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Прокопьевск, ул. Гагарина, д. 25</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 8:00 - 22:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Ваше имя</Label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label>Комментарий</Label>
                  <Input placeholder="Опишите ваш вопрос" />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Наше расположение</CardTitle>
                <CardDescription>г. Прокопьевск, ул. Гагарина, д. 25</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d3e5f7c9a2b1e4d6c8a9b7e5f3d1c2a&amp;source=constructor" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className="w-full h-full"
                    title="Карта расположения"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Wrench" size={32} />
            <span className="text-2xl font-bold">СантехТрендПлюс</span>
          </div>
          <p className="text-secondary-foreground/80 mb-4">
            Профессиональный монтаж сантехнических систем с 2009 года
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#price" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Работы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Separator className="my-6 bg-secondary-foreground/20" />
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://wa.me/79991234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a 
              href="https://t.me/santehtrendplus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="Send" size={20} />
            </a>
            <a 
              href="https://vk.com/santehtrendplus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="Users" size={20} />
            </a>
            <a 
              href="tel:+79991234567"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="Phone" size={20} />
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            © 2024 СантехТрендПлюс. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;