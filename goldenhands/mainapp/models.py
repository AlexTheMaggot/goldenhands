from django.db import models


class Order(models.Model):
    name = models.CharField(verbose_name='Имя', max_length=200)
    phone = models.CharField(verbose_name='Телефон', max_length=200)
    date = models.DateTimeField(verbose_name='Дата', auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'