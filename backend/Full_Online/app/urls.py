from django.urls import path, include
from app.views import ProductViewSet,PaymentModeTypeViewSet, ShoeModelTypeViewSet,BrandTypeViewSet,ColorTypeViewSet,SizeTypeViewSet, LoginView,UserUpdateView,UserDetailView, LogoutView, LogoutAllView, RegisterView, CartViewSet, PurchaseViewSet, ChangeDeliveryStatusAPIView
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r"products",ProductViewSet)
router.register(r"cart",CartViewSet)
router.register(r"purchase",PurchaseViewSet)
router.register(r"model",ShoeModelTypeViewSet)
router.register(r"brand",BrandTypeViewSet)
router.register(r"color",ColorTypeViewSet)
router.register(r"size",SizeTypeViewSet)
router.register(r"payment-mode",PaymentModeTypeViewSet)
purchase_list = PurchaseViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

purchase_detail = PurchaseViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path("", include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('logout_all/', LogoutAllView.as_view(), name='logout_all'),
    path('register/', RegisterView.as_view(), name='register'),
    path('user/', UserDetailView.as_view(), name='user-update'),
    path('user/update/', UserUpdateView.as_view(), name='user-update'),
    path('deliveries/', ChangeDeliveryStatusAPIView.as_view(), name='change delivery_status'),
    path('purchase/', purchase_list, name='purchase-list'),
    path('purchase/<int:pk>/', purchase_detail, name='purchase-detail'),
    path('purchase/confirm_purchase/', PurchaseViewSet.as_view({'post': 'confirm_purchase'}), name='confirm-purchase'),
    path('purchase/user_purchases/', PurchaseViewSet.as_view({'get': 'user_purchases'}), name='user-purchases'),
]
