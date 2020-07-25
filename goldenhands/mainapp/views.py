import telebot

from django.views import View
from django.shortcuts import render, redirect

from .froms import OrderFrom


bot = telebot.TeleBot("1159858590:AAFcZbLCwyh2bap4y06ywFqNKRe-qCDl-Gs")


def index(request):
    return render(request, 'mainapp/index.html')


class OrderView(View):

    def post(self, request):
        if request.method == 'POST':
            form = OrderFrom(request.POST)
            if form.is_valid():
                form.save()
                name = form.cleaned_data['name']
                phone = form.cleaned_data['phone']
                message = 'Новая заявка!' + '\r\n' + '\r\n' + 'Имя: ' + name + '\r\n'
                message += 'Телефон: ' + phone
                bot.send_message(-1001414303261, message)
                return redirect('/thank-you')
        return redirect('/wrong')


def thanks(request):
    return render(request, 'mainapp/thanks.html')


def wrong(request):
    return render(request, 'mainapp/wrong.html')


def custom_404(request, exception):
    return render(request, "404.html")


def main(request):
    return render(request, 'mainapp/main.html')


def main_order(request):
    return redirect('/main/thank-you')


def main_thanks(request):
    return render(request, 'mainapp/main_thanks.html')
